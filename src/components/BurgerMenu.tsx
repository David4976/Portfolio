import { useState } from "react";
import { Link } from "react-router";

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const linkStyle = {
    color: "white",
    fontSize: "24px",
    textDecoration: "none",
  };

  return (
    <>
      {/* Bouton burger — toujours visible en haut à droite */}
      <button
        onClick={toggleMenu}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          width: "40px",
          height: "40px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        aria-label="Menu"
      >
        <span
          style={{
            width: "30px",
            height: "3px",
            backgroundColor: "white",
            marginBottom: "5px",
            transition: "all 0.3s",
            transform: isMenuOpen ? "rotate(45deg) translateY(8px)" : "none",
          }}
        />
        <span
          style={{
            width: "30px",
            height: "3px",
            backgroundColor: "white",
            marginBottom: "5px",
            transition: "all 0.3s",
            opacity: isMenuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: "30px",
            height: "3px",
            backgroundColor: "white",
            transition: "all 0.3s",
            transform: isMenuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
          }}
        />
      </button>

      {/* Menu overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isMenuOpen ? 0 : "-100%",
          width: "300px",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          transition: "right 0.3s ease-in-out",
          zIndex: 90,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Link
          to="/"
          onClick={closeMenu}
          style={linkStyle}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.opacity = "0.7")
          }
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          Accueil
        </Link>
        <a
          href="/#apropos"
          onClick={closeMenu}
          style={linkStyle}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.opacity = "0.7")
          }
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          À propos
        </a>
        <a
          href="/#projets"
          onClick={closeMenu}
          style={linkStyle}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.opacity = "0.7")
          }
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          Mes Projets
        </a>
        <Link
          to="/contact"
          onClick={closeMenu}
          style={linkStyle}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.opacity = "0.7")
          }
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          Contact
        </Link>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 80,
          }}
        />
      )}
    </>
  );
}
