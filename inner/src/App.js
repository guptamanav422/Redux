import Navbar from "./Components/navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Components/cart.jsx";
import Preview from "./Components/preview.jsx";
import Home from "./Components/home.jsx";

let App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;