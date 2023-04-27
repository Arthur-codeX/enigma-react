import useClick from "./../CustomHooks/useClick";

const Main = () => {
  const { click, incrementClick } = useClick();

  return (
    <div>
      <ParentA click={click} />
      <ParentB click={click} />
      <button onClick={incrementClick}>Incerment</button>
    </div>
  );
};

const ParentA = ({ click }) => {
  return (
    <div>
      <h1>I am parent A</h1>
      <ChildA click={click} />
    </div>
  );
};

const ParentB = ({ click }) => {
  return (
    <div>
      <h1>I am parent B</h1>
      <ChildB click={click} />
    </div>
  );
};

const ChildA = ({ click }) => {
  return <h1>I am Child A: {click}</h1>;
};

const ChildB = ({ click }) => {
  return <h1>I am Child B {click}</h1>;
};

export default Main;
