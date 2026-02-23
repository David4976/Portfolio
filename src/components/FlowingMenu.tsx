import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";

interface MenuItemData {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemData[];
  speed?: number;
  textColor?: string;
  bgColor?: string;
  marqueeBgColor?: string;
  marqueeTextColor?: string;
  borderColor?: string;
}

interface MenuItemProps extends MenuItemData {
  speed: number;
  textColor: string;
  marqueeBgColor: string;
  marqueeTextColor: string;
  borderColor: string;
  isFirst: boolean;
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({
  items = [],
  speed = 15,
  textColor = "#fff",
  bgColor = "#060010",
  marqueeBgColor = "#fff",
  marqueeTextColor = "#060010",
  borderColor = "#fff",
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: bgColor,
      }}
    >
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
            isFirst={idx === 0}
          />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  link,
  text,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
  isFirst,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [repetitions, setRepetitions] = useState(8);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number,
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector(
        ".marquee-part",
      ) as HTMLElement;
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;
      const needed = Math.ceil(viewportWidth / contentWidth) + 6;
      setRepetitions(Math.max(8, needed));
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [text, image]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector(
        ".marquee-part",
      ) as HTMLElement;
      if (!marqueeContent) return;
      const singleWidth = marqueeContent.offsetWidth;
      if (singleWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current as any, {
        x: `-=${singleWidth}`,
        duration: speed,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x: string) => {
            const v = parseFloat(x) || 0;
            const mod = ((v % singleWidth) + singleWidth) % singleWidth;
            return `${mod}px`;
          },
        },
      });
    };

    const timer = setTimeout(setupMarquee, 50);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [text, image, repetitions, speed]);

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height,
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height,
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  return (
    <div
      ref={itemRef}
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        borderTop: isFirst ? "none" : `1px solid ${borderColor}`,
      }}
    >
      <Link
        to={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          position: "relative",
          cursor: "pointer",
          textTransform: "uppercase",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "4vh",
          color: textColor,
          zIndex: 1,
        }}
      >
        {text}
      </Link>

      {/* Marquee overlay — starts hidden below (translateY 101%) */}
      <div
        ref={marqueeRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
          backgroundColor: marqueeBgColor,
          transform: "translateY(101%)", // ← inline style, toujours appliqué
          zIndex: 2,
        }}
      >
        <div
          ref={marqueeInnerRef}
          style={{
            height: "100%",
            width: "fit-content",
            display: "flex",
            transform: "translateY(0px)",
          }}
        >
          {[...Array(repetitions)].map((_, idx) => (
            <div
              className="marquee-part"
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                color: marqueeTextColor,
              }}
            >
              <span
                style={{
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  fontSize: "4vh",
                  lineHeight: 1,
                  padding: "0 1vw",
                }}
              >
                {text}
              </span>
              <div
                style={{
                  width: "200px",
                  height: "7vh",
                  margin: "2em 2vw",
                  padding: "1em",
                  borderRadius: "50px",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  flexShrink: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
