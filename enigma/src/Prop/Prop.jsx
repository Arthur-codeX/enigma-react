// Prop.
// This an argument passed int react components
// Rendering <Component  />
// Component should be expecting a prop. with certain name.
// That prop should be passed
// You can pass any data type including functions.
// variable an array

// Take the name of the player as a parameter
// We should display that he is good/bad

const GoodPlayer = (props) => {
  console.log(props);

  // Destructure the data
  let { player_name, own } = props;

  // Destructure the object
  //player_name

  //   props.helloWorld();

  return (
    <div>
      <p>
        {props.player_name} is a good player no of own goals {props.own}
      </p>
      <p>
        {player_name} is a good player no of own goals {own}
      </p>
    </div>
  );
};

// destructure where component parameters are supposed to go.
const BadPlayer = ({ player_name, own }) => {
  //{ player_name, own }=props
  return (
    <p>
      {player_name} is a good player no of own goals {own}
    </p>
  );
};

const Prop = () => {
  //if player has scored 10 aginst bad play traitor/.
  let name = "Harry Magiure";
  let own = 10;

  let obj = { name: name, own: own };
  let arr = [1, 2, 3];

  function helloWorld() {
    console.log("HEllo World");
  }

  // passing a prop/
  // string,boolean<>
  // Rule of thumb<>
  // prop_name should be the name that is expected on the other side.
  // <ComponentName prop_name={prop_value} />
  return (
    <div>
      <GoodPlayer
        player_name={name}
        own={own}
        obj={obj}
        arr={arr}
        helloWorld={helloWorld}
      />
      <BadPlayer
        player_name={name}
        own={own}
        obj={obj}
        arr={arr}
        helloWorld={helloWorld}
      />
    </div>
  );
};

//component being rendered logically
//

export default Prop;
