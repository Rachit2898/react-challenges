import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "./redux/index";
import { addToCart, removeToCart } from "./redux";
import Cart from "./Cart";
import Pagination from "./pagination";
function Index() {
  const dispatch = useDispatch();

  const {  paginatedItems } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    dispatch(fetchApi());
  }, []);
  return (
    <div className="flex justify-center items-center flex-col">
      <h4 className="text-amber-700 font-bold m-20">List of Products</h4>
      { paginatedItems.map((item) => (
        <div className="border bottom-1 w-1/4 p-4 flex justify-between items-center">
          <p className="text-left">{item.title}</p>
          <button onClick={() => dispatch(addToCart(item))} className="bg-red-500 p-4 radius">Add</button>
        </div>
      ))}
     <Cart/>
     <Pagination/>
    </div>
  );
}

export default Index;
