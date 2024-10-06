
import './App.css'
import Top from './components/Top'
import Navbar from './components/Navbar'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import NoPage from './components/NoPage';

function App() {


  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>

      </BrowserRouter>
  )
}

export default App
