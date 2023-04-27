import ItemSection from "./ItemSection";

import CartSection from "./CartSection";

// import dbjson from "./db.json";

const MainSection = ({ setItems, items, cartStatus, setCartStatus }) => {
  // console.log(dbjson);
  return (
    <div style={{ display: "flex", width: "100%", marginRight: "80px" }}>
      <ItemSection setItems={setItems} items={items} />
      {/* {cartStatus && (
        <CartSection
          items={items}
          setItems={setItems}
          cartStatus={cartStatus}
          setCartStatus={setCartStatus}
        />
      )} */}

      {/* Conditional rendering */}
      {cartStatus === true ? (
        <CartSection
          items={items}
          setItems={setItems}
          cartStatus={cartStatus}
          setCartStatus={setCartStatus}
        />
      ) : null}
    </div>
  );
};

export default MainSection;
