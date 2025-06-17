import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "./redux";
function Cart() {
  const { cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  return (
    <div>
    <h4 className="text-amber-700 font-bold m-20">List of Products</h4>
      {cart.map((item) => (
        <>
          <div>
            <p>{item.brand}</p>
          </div>
          <button onClick={() => dispatch(removeToCart(item))}>Remove</button>
        </>
      ))}
    </div>
  );
}

export default Cart;
