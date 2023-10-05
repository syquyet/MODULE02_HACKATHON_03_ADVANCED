import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListProducts from "./ListProducts/listProducts";
import Cart from "./cartProduct/cart";
import { IProduct, listProductsDB } from "./model/data";

function App() {
  const [listProducts, setListProducts] = useState<IProduct[]>(listProductsDB);
  const [listCart, setListCart] = useState<IProduct[]>([]);
  const handleAddToCart = (index: number) => {
    const newProduct = listProducts.find((product, i) => i === index);
    if (newProduct) {
      newProduct.qty = 1;

      setListCart([...listCart, newProduct]);
    }
  };
  const hadleAddQuantity = (index: number) => {
    const newProduct = listCart.find((product, i) => i === index);
    if (newProduct) {
      newProduct.qty++;
      setListCart([...listCart]);
    }
  };
  const hadlerEduceQuantity = (index: number) => {
    const newProduct = listCart.find((product, i) => i === index);
    if (newProduct) {
      newProduct.qty--;
      if (newProduct.qty < 1) {
        newProduct.qty = 1;
      }
    }
    setListCart([...listCart]);
  };
  const handleDeleteProduct = (index: number) => {
    console.log(232332, index);
    setListCart(listCart.filter((product, i) => i !== index));
  };
  const handleDeleteCarrt = () => {
    setListCart([]);
  };
  const handleBuyNow=()=>{
    setListCart([]);
    alert("mua hàng thành công!!!!")
  }

  return (
    <>
      <h1>SẢN PHẨM</h1>
      <hr />
      <ListProducts data={listProducts} onAddToCart={handleAddToCart} />
      <Cart
        cartData={listCart}
        onAddQuantity={hadleAddQuantity}
        onEduceQuantity={hadlerEduceQuantity}
        onDeleteProduct={handleDeleteProduct}
        onDeleteCarrt={handleDeleteCarrt}
        onBuyNow={handleBuyNow}
      />
    </>
  );
}

export default App;
