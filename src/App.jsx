import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Contato from './views/Contato';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {

  return (
    <>
      <Header />
      <div className="flex justify-center flex-col items-center py-4">
        <p>Este template usa as seguintes dependências</p>
        <ul className="text-center">
          <li>Sass</li>
          <li>Tailwind</li>
          <li>React Router Dom 6</li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
