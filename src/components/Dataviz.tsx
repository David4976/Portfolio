import ProjectPage from "./ProjectPage";

export default function Dataviz() {
  return (
    <ProjectPage
      title="Dataviz"
      description="Application de visualisation de données : Paris et arrondissements via une API opendata avec des graphiques dynamiques et une gestion de filtres."
      technologies={[
        "React",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Recharts",
        "API REST",
      ]}
      images={[
        "/images/Dataviz1.png",
        "/images/Dataviz2.png",
        "/images/Dataviz3.png",
        "/images/Dataviz4.png",
      ]}
      link="https://projet-dataviz-davanto.vercel.app/"
      github="https://github.com/David4976/projet-dataviz-davanto.git"
    />
  );
}
