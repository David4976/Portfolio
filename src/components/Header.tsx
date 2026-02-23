import DarkVeil from "./DarkVeil.jsx";

export default function Header() {
  return (
    <header
      className="w-full relative overflow-hidden"
      style={{ height: "clamp(180px, 30vw, 300px)" }}
    >
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <DarkVeil
          hueShift={30}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>
      <div
        className="relative h-full flex flex-col justify-center items-center px-8"
        style={{ zIndex: 10, paddingTop: "20px", paddingBottom: "12px" }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            className="font-bold"
            style={{
              position: "relative",
              zIndex: 10,
              fontSize: "clamp(2rem, 10vw, 100px)",
              background: "linear-gradient(135deg, #ffffff 40%, #00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.1,
            }}
          >
            DAVID BELLOIR
          </h1>
          <h3
            style={{
              position: "relative",
              zIndex: 10,
              fontSize: "clamp(0.9rem, 3vw, 32px)",
              fontWeight: "300",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.1em",
              marginTop: "8px",
            }}
          >
            Développeur Web Full Stack
          </h3>
        </div>
      </div>
    </header>
  );
}
