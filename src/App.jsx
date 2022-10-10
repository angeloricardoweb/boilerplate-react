import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { DrawerMenu } from './components/DrawerMenu'
import { GlobalContextProvider } from './context/GlobalContextProvider'

function App() {
  return (
    <GlobalContextProvider>
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
    </GlobalContextProvider>
  )
}

export default App
