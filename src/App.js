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
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="#fff" />
      <AuthProvider>
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
            <Route path='/contact' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
