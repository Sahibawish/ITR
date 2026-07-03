import "./App.css";
import { Routes, Route } from "react-router-dom";
import IncomeTaxLayout from "./incometax/layout/incometax_layout";
import IncomeTaxLogin from "./incometax/login";
import IncomeTax_Dashboard from "./incometax";
import Comingsoon from "./incometax/comingsoon";

function App() {
  return (
    <Routes>
        <Route path="/" element={<IncomeTaxLogin />} />
      <Route path="/incometax" element={<IncomeTaxLayout />}>
        <Route path="itr_dashboard/*" element={<IncomeTax_Dashboard />} />
        <Route path="comingsoon" element={<Comingsoon />} />
      </Route>
    </Routes>
  );
}

export default App;
