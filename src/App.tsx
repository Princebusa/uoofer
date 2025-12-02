import Header from "./component/header";
import Hero from "./component/home/hero";
import { BrowserRouter, Router,Route, Routes } from "react-router-dom";
import bg from "./assets/Hypro.jpg";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
            <Header/>
            <Hero />
            </>
          } />
          <Route path="hypro" element={
            <>
             <img src={bg}/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
