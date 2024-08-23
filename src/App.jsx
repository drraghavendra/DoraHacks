import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Advertiser from "./pages/Advertiser";
import Publisher from "./pages/Publisher";
import LoginAndSignup from "./pages/LoginAndSignup/LoginAndSignup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen flex justify-center bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginAndSignup />} />
          <Route path="/advertiser/*" element={<Advertiser />} />
          <Route path="/publisher/*" element={<Publisher />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
