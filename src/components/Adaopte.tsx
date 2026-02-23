import ProjectPage from "./ProjectPage";

export default function Adaopte() {
  return (
    <ProjectPage
      title="Adaopte"
      description="Création de site d'adoption d'animaux suivant un cahier des charges et une maquette."
      technologies={["React", "TypeScript", "Tailwind"]}
      images={[
        "/images/Adaopte1.png",
        "/images/Adaopte2.png",
        "/images/Adaopte3.png",
        "/images/Adaopte4.png",
        "/images/Adaopte5.png",
      ]}
      link="https://projet-adaopte-davielle.vercel.app/"
      github="https://github.com/DANIebw/Projet-Adaopte-Davielle.git"
    />
  );
}
