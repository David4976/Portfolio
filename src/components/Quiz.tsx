import ProjectPage from "./ProjectPage";

export default function Quizz() {
  return (
    <ProjectPage
      title="Quiz"
      description="Création libre d'un quiz dynamique sur les dessins animés."
      technologies={["HTML", "CSS", "JavaScript"]}
      images={["/images/Quiz1.png", "/images/Quiz2.png", "/images/Quiz3.png"]}
      link="#"
      github="https://github.com/adatechschool/projet-quiz-team-mejeda.git"
    />
  );
}
