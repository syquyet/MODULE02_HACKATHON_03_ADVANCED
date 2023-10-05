import { icons } from "react-icons";
import { IProduct } from "../model/data";
interface Props {
  cartData: IProduct[];
  onAddQuantity: Function;
  onEduceQuantity: Function;
  onDeleteProduct: Function;
  onDeleteCarrt: Function;
  onBuyNow: Function;
}
export default function Cart(props: Props) {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <table>
        <tbody>
          {props.cartData &&
            props.cartData.map((product, index) => (
              <tr key={index}>
                <td>
                  <img src={product.imageUrl} alt="" />
                </td>
                <td>{product.name}</td>
                <td className="quantity">
                  <button onClick={() => props.onEduceQuantity(index)}>
                    -
                  </button>
                  <p>{product.qty}</p>
                  <button onClick={() => props.onAddQuantity(index)}>+</button>
                </td>
                <td>{(product.price * product.qty).toLocaleString()}</td>
                <td>
                  <div>
                    <button
                      onClick={() => {
                        props.onDeleteProduct(index);
                        console.log(12121212212);
                      }}
                    >
                      x
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="cart-footer">
        <p>total:222222</p>
        <button onClick={()=>props.onBuyNow()}>Buy now</button>
        <button onClick={() => props.onDeleteCarrt()}>Clear Cart</button>
      </div>
    </div>
  );
}
