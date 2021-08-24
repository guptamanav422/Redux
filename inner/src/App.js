import { useDispatch, useSelector } from "react-redux";
import {incrementCreator ,decrementCreator ,loginCreator,logoutCreator} from "./file/actions"
function App() {


  let {logged,count}=useSelector((state)=>state);

  let dispatch=useDispatch();
  return (
    <>
    <button onClick={()=>{
      dispatch(loginCreator());
    }} >Login</button>

<hr />
    <button onClick={()=>{
      dispatch(logoutCreator());
    }}>Logout</button>
    <hr />
    {logged?
    <>
    <button onClick={()=>{
      dispatch(incrementCreator(1));
    }}>INCREMENT +1</button>
    <button onClick={()=>{
      dispatch(incrementCreator(10));
    }}>INCREMENT +10</button>
    <p>{count}</p>
    <button onClick={()=>{
      dispatch(decrementCreator());
    }}>DECREMENT</button>
    </>: ""}
    </>
  );
}

export default App;
