import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar.component.jsx";
import Shop from "./components/routes/Shop/Shop.component.jsx";
import Home from "./components/routes/Home/Home.component.jsx";
import Login from "./components/routes/Login/Login.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
