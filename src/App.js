import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Common/Footer/Footer';
import Header from './Components/Common/Header/Header';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="#fff" />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
