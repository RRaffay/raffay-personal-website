import React from "react";
import ReactDOM from "react-dom";
import NamePage from "./NamePage";
import AboutMePage from "./AboutMePage";
import ReachMePage from "./ReachMePage";

function MainPage() {
  return (
    <>
      <NamePage />
      <AboutMePage />
      <ReachMePage />
      {/* <BlogPage /> */}
    </>
  );
}

export default MainPage;
