const CartSection = ({ items, setItems, setCartStatus }) => {
  function closeCart() {
    setCartStatus(false);
  }

  function RemoveItem(doc) {
    console.log(doc);
    //Filter
    let newItems = [];

    for (let item of items) {
      if (item.id === doc.id) {
        // This item needs to be removed.
      } else {
        newItems.push(item);
      }
    }

    setItems(newItems);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        Cart Section{" "}
        <button onClick={closeCart} style={{ backgroundColor: "red" }}>
          X
        </button>
      </div>
      {items.map((doc) => {
        // Card Section
        return (
          <div style={{ margin: "10px", border: "2px solid black" }}>
            <p>{doc.name}</p>
            <p>{doc.price}</p>
            <p>
              Remove Item
              <button
                onClick={() => RemoveItem(doc)}
                style={{ backgroundColor: "red" }}
              >
                X
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CartSection;
