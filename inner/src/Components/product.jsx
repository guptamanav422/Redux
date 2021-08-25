import "./product.css"
import {useHistory} from "react-router-dom"
import {addCreator} from "../Redux/actions"
import { useDispatch } from "react-redux";


let Product = (props) => {

    let dispatch=useDispatch();
    let history =useHistory();
    return (
      <div className="product-card">
        <div  onClick={()=>{
            history.push(`/preview/${props.data.id}`)

        }}className="product-img">
          <img
            src={props.data.img}
            alt=""
          />
        </div>
        <div className="product-btn">
          <button onClick={()=>{
              dispatch(addCreator(props.data.id));
          }}>Add to Cart</button>
        </div>
      </div>
    );
  };
  export default Product;