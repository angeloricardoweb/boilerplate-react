import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex justify-center flex-col items-center py-4">
          <p>Este template usa as seguintes dependências</p>
          <ul className="text-center">
            <li>Sass</li>
            <li>Tailwind Css</li>
            <li>DaisyUI</li>
            <li>Swiper JS</li>
            <li>React Router Dom 6</li>
            <li>React Icons</li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

