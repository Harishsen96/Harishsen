import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Header from "./Components/Header";
import Academic from "./Components/Academic";
import Footer from './Components/Footer';
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Landing />} />
          {/* <Route path="/Academic" element={<Academic/>}/> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}