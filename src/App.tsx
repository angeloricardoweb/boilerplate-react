import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalContextProvider } from './context/GlobalContextProvider';
import { BoxCookies } from '@components/Partials/BoxCookies';
import { Footer } from '@components/Footer';
import Home from '@pages/Home';
import { FormExample } from '@pages/Form';
import PageNotFound from '@pages/404';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<FormExample />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <ToasterComponent />
        <BoxCookies />
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

function ToasterComponent() {
  return (
    <Toaster
      toastOptions={{
        className: 'bg-zinc-500 text-white',
        style: {
          zIndex: 999999,
        },
      }}
    />
  );
}

export default App;

