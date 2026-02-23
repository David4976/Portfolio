export default function About() {
  return (
    <section
      id="apropos"
      className="w-full min-h-screen"
      style={{
        backgroundColor: "#02010a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(40px, 8vw, 80px) clamp(16px, 4vw, 32px)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "860px",
          padding: "clamp(28px, 5vw, 48px) clamp(20px, 5vw, 56px)",
          borderRadius: "16px",
          border: "1px solid rgba(0,255,255,0.15)",
          backgroundColor: "rgba(0,255,255,0.04)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 3rem)",
            fontWeight: 800,
            marginBottom: "32px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            background: "linear-gradient(135deg, #ffffff 40%, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          À propos de moi
        </h2>
        <p
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            lineHeight: 1.9,
            color: "#c8d8e8",
            marginBottom: "24px",
          }}
        >
          Bonjour ! Je suis David, après plus de 25 ans d'expérience dans le
          domaine industriel, j'ai décidé qu'il était temps de me consacrer à ce
          qui me caractérisait le plus, à savoir ma créativité, mon sens du
          design et la logique.
        </p>
        <p
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            lineHeight: 1.9,
            color: "#c8d8e8",
          }}
        >
          Quoi de mieux pour apporter mes compétences et mes appétences que le
          développement web. Avide de connaissances et désireux d'amener mes
          atouts dans un domaine très enrichissant, je suis à la recherche d'une
          alternance pour approfondir mes connaissances et acquérir de nouvelles
          compétences.
        </p>
      </div>
    </section>
  );
}
