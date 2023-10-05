import { IProduct } from "../model/data";
import { icons } from "react-icons";
interface Props {
  data: IProduct[];
  onAddToCart:Function
}

export default function ListProducts(props: Props) {
  return (
    <div className="list-card">
      {props.data &&
        props.data.map((product, index) => (
          <div className="card" key={index}>
            <div className="content">
              <img src={product.imageUrl} alt="" />
              <div className="footer-content">
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.des}</p>
                </div>
                <div className="card-footer">
                  <p>Giá:{product.price.toLocaleString()}$</p>
                  <span>
                    <button onClick={()=>props.onAddToCart(index)}>Add</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
