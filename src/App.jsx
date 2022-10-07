import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { DrawerMenu } from './components/DrawerMenu'

function App() {
  return (
    <>
      <BrowserRouter>
        <DrawerMenu>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Footer />
        </DrawerMenu>
      </BrowserRouter>
    </>
  )
}

export default App
