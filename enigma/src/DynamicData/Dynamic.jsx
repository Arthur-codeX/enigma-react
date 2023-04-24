// Data that is not hard coded.
// Data from variables.
// Brackets
// {<variable><comparison>}
// {<logical ie short circuit>}
// {logical operator to render a component}

const GoodPlayer = () => {
  return <p>harry is a good player</p>;
};

const BadPlayer = () => {
  return <p>harry is a bad player</p>;
};

const Dynamic = () => {
  //if player has scored 10 aginst bad play traitor/.
  let name = "Harry Magiure";
  let own = 11;
  return (
    <div>
      <h1>Hello {name}</h1>
      {own > 10 ? (
        <p>{name} harry is a bad player</p>
      ) : (
        <p>{name} harry is a good player</p>
      )}

      <div>
        {name} {own > 10 ? <BadPlayer /> : <GoodPlayer />}
      </div>
    </div>
  );
};

//component being rendered logically
//

export default Dynamic;
