import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalContextProvider } from './context/GlobalContextProvider';
import { BoxCookies } from '@components/Partials/BoxCookies';
import { Footer } from '@components/Footer';
import Home from '@pages/Home';
import { FormExample } from '@pages/Form';
import PageNotFound from '@pages/404';
import Presentation from '@pages/Presentation';
import Modals from '@components/Modals';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          {/* remove this route to start */}
          <Route path="/" element={<Presentation />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/contato" element={<FormExample />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <BoxCookies />
        <Modals/>
        <ToasterComponent />
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

