import { useDispatch, useSelector } from "react-redux";
import {incrementCreator ,decrementCreator} from "./file/actions"
function App() {


  let state=useSelector((state)=>state);

  let dispatch=useDispatch();
  return (
    <>
    <button onClick={()=>{
      dispatch(incrementCreator());
    }}>INCREMENT</button>
    <p>{state}</p>
    <button onClick={()=>{
      dispatch(decrementCreator());
    }}>DECREMENT</button>
    </>
  );
}

export default App;
