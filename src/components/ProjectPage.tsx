import { Link } from "react-router";

interface ProjectPageProps {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  link?: string;
  github?: string;
}

export default function ProjectPage({
  title,
  description,
  technologies,
  images,
  link,
  github,
}: ProjectPageProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#02010a",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      {/* Bouton retour */}
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
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "48px",
        }}
      >
        {/* Titre */}
        <h1
          style={{
            fontSize: "clamp(2rem, 8vw, 6rem)",
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
          {title}
        </h1>

        {/* Description */}
        <div
          style={{
            width: "100%",
            padding: "24px 28px",
            borderRadius: "16px",
            border: "1px solid rgba(0,255,255,0.15)",
            backgroundColor: "rgba(0,255,255,0.04)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: 1.8,
              color: "#c8d8e8",
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {technologies.map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.85rem",
                  padding: "8px 18px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(0,255,255,0.06)",
                  color: "#00ffff",
                  border: "1px solid rgba(0,255,255,0.2)",
                  cursor: "default",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(0,255,255,0.18)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(0,255,255,0.6)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(0,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(0,255,255,0.2)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Screenshots — 1 colonne sur mobile, 2 sur desktop */}
        {images.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              width: "100%",
            }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} screenshot ${i + 1}`}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "block",
                }}
              />
            ))}
          </div>
        )}

        {/* Liens */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                borderRadius: "12px",
                backgroundColor: "rgba(0,255,255,0.12)",
                color: "#00ffff",
                border: "1px solid rgba(0,255,255,0.3)",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
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
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Démo live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                borderRadius: "12px",
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.15)",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: "0.04em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
