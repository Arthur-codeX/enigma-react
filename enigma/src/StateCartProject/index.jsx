import { useState } from "react";
import "./index.css";

import Header from "./HeaderSection";

import CartBar from "./CartSection";

import MainSection from "./MainSection";

const CartMiniProject = () => {
  const [items, setItems] = useState([]);

  //boolean
  const [cartStatus, setCartStatus] = useState(false);

  //show Cart
  // Hide Cart

  return (
    <div className="full_screen">
      <Header />
      <CartBar
        items={items}
        cartStatus={cartStatus}
        setCartStatus={setCartStatus}
      />
      <MainSection
        setItems={setItems}
        items={items}
        cartStatus={cartStatus}
        setCartStatus={setCartStatus}
      />
    </div>
  );
};

export default CartMiniProject;
