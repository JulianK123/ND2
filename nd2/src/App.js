import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Papildymas from './components/papildymas';
import Main from './components/main';
import Success from './components/success';
import Isvedimas from './components/isvedimas';
import Info from './components/info';
import GetInfo from './components/GetInfo';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/papildymas" element={<Papildymas />}></Route>
      <Route path="/isvedimas" element={<Isvedimas />}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/getInfo" element={<GetInfo />}></Route>
      <Route path="/success/" element={<Success />} />
    </Routes>
  </BrowserRouter>    
</>
  
  );
}

export default App;