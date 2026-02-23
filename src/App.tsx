import "./App.css";
import { Routes, Route } from "react-router";
import BurgerMenu from "./components/BurgerMenu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Adaopte from "./components/Adaopte";
import Dataviz from "./components/Dataviz";
import Quizz from "./components/Quiz";
import Scenema from "./components/Scenema";
import Contact from "./components/Contact";
import CV from "./components/CV";

function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/CV" element={<CV />} /> {/* ← sans Footer ni BurgerMenu */}
      <Route
        path="*"
        element={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <BurgerMenu />
            <div style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adaopte" element={<Adaopte />} />
                <Route path="/dataviz" element={<Dataviz />} />
                <Route path="/quizz" element={<Quizz />} />
                <Route path="/scenema" element={<Scenema />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
