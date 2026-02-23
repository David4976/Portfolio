import FlowingMenu from "./FlowingMenu";
import Adaopte from "./Adaopte";
import Dataviz from "./Dataviz";
import Quizz from "./Quiz";

const demoItems = [
  {
    link: "/adaopte",
    text: "Adaopte",
    image: "/images/chien.jpg",
  },
  {
    link: "/dataviz",
    text: "Dataviz",
    image: "/images/dataviz.webp",
  },
  {
    link: "/quizz",
    text: "Quizz",
    image: "/images/quizz.jpeg",
  },
  {
    link: "/scenema",
    text: "Scenema",
    image: "/images/scenema.png",
  },
];

// projectsData removed — individual project components used instead

export default function Projects() {
  return (
    <section
      id="projets"
      className="w-full min-h-screen"
      style={{ backgroundColor: "#02010a" }}
    >
      <div
        style={{ height: "clamp(300px, 60vw, 600px)", position: "relative" }}
      >
        <FlowingMenu
          items={demoItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#060010"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#060010"
          borderColor="#ffffff"
        />
      </div>

      <div className="container mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-white mb-8">Mes projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Adaopte />
          <Dataviz />
          <Quizz />
        </div>
      </div>
    </section>
  );
}
