import React, { useState, useRef } from "react";

//useState
// useRef <Not recomende>
// OnChange Event

const Forms = () => {
  const email = useRef(null);

  const [name, setName] = useState("Humpty Dumpty Dumpty");
  const [useMail, setUserMail] = useState("");

  function handleNameChange(e) {
    console.log(e);
    console.log(e.target.value);
    setName(e.target.value);
    // we can tie this to a state variable.
    // you can tie to a ref variable.
    //.document.getElementById("dass").value="input box balue"
  }

  function handleEmailChange(e) {
    console.log(email.current);
    console.log(email.current.value);
  }

  function handleSubmit() {
    //send data to back
    console.log(name);
    console.log(useMail);
  }

  return (
    <div>
      <p>
        <label>Name</label>
        <input
          value={name}
          name="name"
          type="text"
          onChange={(e) => handleNameChange(e)}
        />
      </p>
      <p>
        <label>Email</label>
        <input
          name="password"
          value={useMail}
          onChange={(e) => setUserMail(e.target.value)}
        />
      </p>
      {/* <p>
        <label>Email</label>
        <input
          name="password"
          type="password"
          ref={email}
          onChange={(e) => handleEmailChange(e)}
        />
      </p> */}
      <button onClick={handleSubmit}>Submit The Form</button>
    </div>
  );
};

const Form2 = () => {
  //6inpuits 6
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const [nameBorder, setNameBorder] = useState("2px solid blue");

  function handleInput(e, input_key) {
    console.log(e.target.value);
    console.log(input_key);
    let newState = { ...input };
    newState[input_key] = e.target.value;
    setInput(newState);
  }

  function handleSubmit() {
    //send data to back
    console.log(input);
    //validate the emaiul

    if (input.email.includes("@") === false) {
      alert("Enter Valid Email");
    }
  }

  // Input OnBlur

  function Blured(input_key) {
    if (input_key === "name") {
      if (input.name.length < 4) {
        alert("Name to short");
        setNameBorder("2px solid red");
      }
    }
  }

  return (
    <div>
      <p>
        <label>Name</label>
        <input
          value={input.name}
          name="name"
          type="text"
          style={{ border: nameBorder }}
          onChange={(e) => handleInput(e, "name")}
          onBlur={() => Blured("name")}
        />
      </p>
      <p>
        <label>Email</label>
        <input
          name="text"
          value={input.email}
          onChange={(e) => handleInput(e, "email")}
        />
      </p>
      <p>
        <label>Password</label>
        <input
          name="text"
          value={input.password}
          onChange={(e) => handleInput(e, "password")}
        />
      </p>

      <button onClick={handleSubmit}>Submit The Form</button>
    </div>
  );
};

export default Form2;
