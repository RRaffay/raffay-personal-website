import NavBar from "./components/NavBar";
import NamePage from "./components/NamePage";
import AboutMePage from "./components/AboutMePage";
import ProjectsPage from "./components/ProjectsPage";
import ReachMePage from "./components/ReachMePage";
import BlogPage from "./components/BlogPage";

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
      {/* <BlogPage /> */}
      <ReachMePage />
      <div style={lastStyle}>© Raffay Rana {copyrightYear}</div>
    </>
  );
}

export default App;
