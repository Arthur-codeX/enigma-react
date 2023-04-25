const Card = ({ doc, setItems, items }) => {
  // Handle Adding items to the cart

  //items is an array
  // Push.

  function handleAdd() {
    // Method 1
    // let newItems = [...items];
    // newItems.push(doc);
    // setItems(newItems);

    // Method 2
    setItems([doc, ...items]);
  }

  return (
    <div
      style={{ width: "auto", flexDirection: "column", margin: "20px" }}
      className="flex"
    >
      <img src={doc.src} />
      <p>{doc.name}</p>
      <p>{doc.price}</p>
      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
};

export default Card;
