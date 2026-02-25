import { Link } from "react-router";

export default function Scenema() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#02010a",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ padding: "24px 40px" }}>
        <Link
          to="/"
          style={{
            color: "#00ffff",
            textDecoration: "none",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
          }}
        >
          ← Retour
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 80px)",
          gap: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            textAlign: "center",
            letterSpacing: "0.08em",
            margin: 0,
            background: "linear-gradient(135deg, #ffffff 40%, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Scenema
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Projet perso en cours
        </p>
      </div>
    </div>
  );
}
