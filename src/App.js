import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Common/Footer/Footer';
import Header from './Components/Common/Header/Header';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Admissions from './Components/Admissions/Admissions';
import Department from './Components/Programme/Programme';
import Programme from './Components/Programme/Programme';
import TutionFee from './Components/TutionFee/TutionFee';

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
          <Route path='/admission' element={<Admissions />} />
          <Route path='/department' element={<Department />} />
          <Route path='/programme' element={<Programme />} />
          <Route path='/fees' element={<TutionFee />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
