import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar.component.jsx";
import Shop from "./components/routes/Shop/Shop.component.jsx";
import Home from "./components/routes/Home/Home.component.jsx";
import Authentication from "./components/routes/Authentication/Authentication.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
