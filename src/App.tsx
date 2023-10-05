import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListProducts from "./ListProducts/listProducts";
import Cart from "./cartProduct/cart";
import { IProduct, listProductsDB } from "./model/data";

function App() {
  const [listProducts, setListProducts] = useState<IProduct[]>(listProductsDB);
  const [listCart, setListCart] = useState<IProduct[]>([]);
  // thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (index: number) => {
    const newProduct = listProducts.find((product, i) => i === index);
    if (newProduct) {
      newProduct.qty = 1;

      setListCart([...listCart, newProduct]);
    }
    console.log(34423, listCart);
  };
  // tăng số lượng trong giỏ hàng
  const hadleAddQuantity = (index: number) => {
    const newProduct = listCart.find((product, i) => i === index);

    if (newProduct) {
      newProduct.qty++;
      setListCart([...listCart]);
    }
  };
// giảm số lượng trong giỏ hàng
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
  // xóa sản phẩm trong giỏ hàng
  const handleDeleteProduct = (index: number) => {
    setListCart(listCart.filter((product, i) => i !== index));
  };
  // xóa giỏ hàng
  const handleDeleteCarrt = () => {
    setListCart([]);
  };
  // thanh toán
  const handleBuyNow = () => {
    setListCart([]);
    alert("mua hàng thành công!!!!");
  };
  // tính tổng tiền
function handleSumMoney(){
  let sum = 0;
  listCart.map((product)=>{
    sum += product.price * product.qty;
  })
  return sum;
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
        onSumMoney={handleSumMoney}
      />
    </>
  );
}

export default App;
