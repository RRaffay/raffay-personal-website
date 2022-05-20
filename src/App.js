import NavBar from "./components/NavBar";
import NamePage from "./components/NamePage";
import AboutMePage from "./components/AboutMePage";
import ProjectsPage from "./components/ProjectsPage";
import ReachMePage from "./components/ReachMePage";

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
    <>
      <NavBar />
      <NamePage />
      <AboutMePage />
      <ProjectsPage />
      <ReachMePage />
      <div style={lastStyle}>© Raffay Rana {copyrightYear}</div>
    </>
  );
}

export default App;
