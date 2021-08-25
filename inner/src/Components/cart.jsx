import { useDispatch, useSelector } from "react-redux";
import {removeCreator} from "../Redux/actions.js"
let Cart = () => {

    let dispatch= useDispatch();
    let state= useSelector((state)=> state);

    let filteredArr=state.filter((el)=>el.qty>0);
    let total=0;
    return (
      <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
          {filteredArr.map((el,index)=>{
              total+=el.price*el.qty
              return <tr>
              <td> {index+1}</td>
              <td>{el.name}</td>
              <td>{el.price}</td>
              <td>{el.qty}</td>
              <td>RS {el.price*el.qty}</td>
              <td><button onClick={()=>{
                  dispatch(removeCreator(el.id))
              }}>Remove </button></td>
              </tr>
          })}

          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>TOTAL{total} </td>
          </tr>
          </tbody>
        </table>
      </>
    );
  };
  
  export default Cart;