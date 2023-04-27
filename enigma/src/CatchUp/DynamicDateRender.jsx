import data from "./sampleItems";

const DynamicDataRender = () => {
  console.log(data);

  // Loop
  // for loop/
  // Map
  // {}
  return (
    <div>
      <h1>Dynamic Data render</h1>
      {/* {data.map(function (doc, index) {
        console.log(doc);
        console.log(index);
        return (
          <div>
            <h1>Hello</h1>
            <h1></h1>
          </div>
        );
      })}
      <CardComponent item={data[0]} />
      <CardComponent item={data[1]} />
      <CardComponent item={data[2]} /> */}

      {data.map(function (doc, index) {
        // console.log(doc);
        // console.log(index);
        return <CardComponent item={doc} key={doc.id} />;
      })}
    </div>
  );
};

const CardComponent = ({
  item = {
    id: 0,
    src: "https://m.media-amazon.com/images/I/71xiaUDxklL._AC_UY218_.jpg",
    name: "Cool Keyboard",
    price: 139,
  },
}) => {
  return (
    <div style={{ border: "2px solid blue", margin: "10px" }}>
      <p>
        <img src={item.src} />
      </p>
      <h1>Name: {item.name}</h1>
      <h1>Price: {item.price}</h1>
    </div>
  );
};

export default DynamicDataRender;
