import { useDispatch, useSelector } from "react-redux";
import {incrementCreator ,decrementCreator} from "./file/actions"
function App() {


  let state=useSelector((state)=>state);

  console.log(state);
  // let dispatch=useDispatch();
  return (
    <>
    {/* <button onClick={()=>{
      dispatch(incrementCreator(1));
    }}>INCREMENT +1</button>
    <button onClick={()=>{
      dispatch(incrementCreator(10));
    }}>INCREMENT +10</button>
    <p>{state}</p>
    <button onClick={()=>{
      dispatch(decrementCreator());
    }}>DECREMENT</button> */}
    </>
  );
}

export default App;
