import {Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App () {



  return (
    <>
    <NavBar/>
    <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/About" element = {<About />} />
        <Route path = "/Services" element = {<Services />} />
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
