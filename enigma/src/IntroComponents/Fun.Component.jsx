// Arrow or a normal function
// If its the first letter must be capitalized.
// it must return only one html element or null

import "./fun.css";

import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Car from "./Class.Component";

import puppy from "./download.jpg";

//html inline sty;es <div style=""></div>

function Fun() {
  //js Code/
  // Can have other function inside your components.
  function sum(a, b) {
    return a + b;
  }
  //class class-> // className

  let theStyles = {
    color: "white",
    backgroundColor: "red",
  };

  return (
    <div>
      <div>
        {/* Other componetns  */}
        <h1 className="bg-yellow">Hello World. Intro to components</h1>
        <h1 style={theStyles}>Hello World. Intro to components</h1>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <img src={puppy} alt="Puppy Image" />
        <img src="puupy2.jpg" alt="Puppy Image" />
      </div>
      <Car />
    </div>
  );
}

export default Fun;
