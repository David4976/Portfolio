import { Link } from "react-router";

export default function CV() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#02010a",
        color: "#fff",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 32px 80px",
      }}
    >
      {/* Bouton retour */}
      <div style={{ width: "100%", maxWidth: "900px", marginBottom: "24px" }}>
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

      {/* Titre */}
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 4rem)",
          fontWeight: 800,
          textTransform: "uppercase",
          textAlign: "center",
          letterSpacing: "0.08em",
          margin: "0 0 40px 0",
          background: "linear-gradient(135deg, #ffffff 40%, #00ffff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Mon CV
      </h1>

      {/* Encadré téléchargement */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          padding: "20px 28px",
          borderRadius: "16px",
          border: "1px solid rgba(0,255,255,0.15)",
          backgroundColor: "rgba(0,255,255,0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "32px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <p style={{ margin: 0, color: "#c8d8e8", fontSize: "1rem" }}>
          Télécharger mon CV au format PDF
        </p>
        <a
          href="/images/CV.pdf"
          download
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 28px",
            borderRadius: "10px",
            backgroundColor: "rgba(0,255,255,0.12)",
            color: "#00ffff",
            border: "1px solid rgba(0,255,255,0.3)",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            letterSpacing: "0.04em",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor =
              "rgba(0,255,255,0.25)";
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor =
              "rgba(0,255,255,0.12)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Télécharger PDF
        </a>
      </div>

      {/* Iframe CV */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "16px",
          border: "1px solid rgba(0,255,255,0.15)",
          overflow: "hidden",
        }}
      >
        <iframe
          src="/images/CV.html"
          style={{
            width: "100%",
            height: "900px",
            border: "none",
            display: "block",
          }}
          title="Mon CV"
        />
      </div>
    </div>
  );
}
