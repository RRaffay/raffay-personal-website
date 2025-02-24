import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";

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
          path="/my-website-app"
          element={
            <>
              <NavBar />
              <MainPage />
            </>
          }
        />
      </Routes>

      <div style={lastStyle}>© Raffay Rana {copyrightYear}</div>
    </div>
  );
}

export default App;
