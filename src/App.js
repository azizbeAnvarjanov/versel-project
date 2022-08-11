import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import BoshSahifa from "./Components/BoshSahifa/BoshSahifa";
import BizHaqimizda from "./Components/BizHaqimizda/BizHaqimizda";
import Kutibxona from "./Components/Kutibxona/Kutibxona";
import Aloqa from "./Components/Aloqa/Aloqa";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BoshSahifa />}/>
          <Route path="/bizhaqimizda" element={<BizHaqimizda />}/>
          <Route path="/kutibxona" element={<Kutibxona />}/>
          <Route path="/aloqa" element={<Aloqa />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
