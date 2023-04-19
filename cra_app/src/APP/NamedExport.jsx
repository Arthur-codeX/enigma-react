function App1() {
  return (
    <div>
      <h1>APP1</h1>
      <img />
    </div>
  );
}

function App2() {
  return (
    <div>
      <h1>APP2</h1>
      <img />
    </div>
  );
}

//Named Export
// Multiple Stuff
// Default Export and A named export in the same file

export { App1, App2 };

//Only one default Export
export default App1;
