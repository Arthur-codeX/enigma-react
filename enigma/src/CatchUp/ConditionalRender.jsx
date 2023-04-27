import { useState } from "react";

// Basic Naviagition system

const Main = () => {
  const [page, setPage] = useState("About");

  function handlePageChange(name) {
    setPage(name);
  }

  return (
    <div>
      <div>
        <button onClick={() => handlePageChange("Home")}>Home</button>
        <button onClick={() => handlePageChange("About")}>About</button>
        <button onClick={() => handlePageChange("Contact")}>Contact</button>
      </div>
      {/* <RenderComp page={page} /> */}
      {page === "Home" ? (
        <Home />
      ) : page === "About" ? (
        <About />
      ) : page === "Contact" ? (
        <Contact />
      ) : (
        <h1>Pag not found</h1>
      )}
    </div>
  );
};

const RenderComp = ({ page }) => {
  //condition if

  if (page == "Home") {
    return <Home />;
  }
  if (page == "About") {
    return <About />;
  }

  if (page == "Contact") {
    return <Contact />;
  }

  return <h1>Page not found 404.</h1>;
};

const Home = () => {
  return <h1>This is the home page</h1>;
};

const About = () => {
  return <h1>This is the About page</h1>;
};

const Contact = () => {
  return <h1>This is the Contact page</h1>;
};

export default Main;
