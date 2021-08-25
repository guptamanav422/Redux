import "./product.css"
import {useHistory} from "react-router-dom"
let Product = (props) => {
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
          <button>Add to Cart</button>
        </div>
      </div>
    );
  };
  export default Product;