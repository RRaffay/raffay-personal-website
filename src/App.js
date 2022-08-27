import NavBar from "./components/NavBar";
import NavBarSmall from "./components/NavBarSmall";
import ProjectsPage from "./components/ProjectsPage";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import ML from "./components/ML";

function App() {
  const copyrightYear = new Date().getFullYear();
  const lastStyle = {
    color: "grey",
    textAlign: "center",
    fontSize: "18px",
    backgroundColor: "#fce1e0",
    paddingBottom: "10px",
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <MainPage />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <NavBarSmall />
              <ProjectsPage />
            </>
          }
        />
        <Route
          path="/machinelearning"
          element={
            <>
              <NavBarSmall />
              <ML />
            </>
          }
        />
      </Routes>

      <div style={lastStyle}>© Raffay Rana {copyrightYear}</div>
    </div>
  );
}

export default App;
