import { Routes, Route } from "react-router-dom";

import Authentication from "./components/routes/Authentication/Authentication.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.component.jsx";
import Shop from "./components/routes/Shop/Shop.component.jsx";
import Home from "./components/routes/Home/Home.component.jsx";
import Checkout from "./components/routes/Checkout/Checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
