import {Routes, Route, Link} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

function NavBar () {


  return( 
  <>

    <ul className=''>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/About">About</Link></li>
        <li><Link to = "/Services">Services</Link></li>
        <li><Link to = "/Contact">Contact</Link></li>
    </ul>

    <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/About" element = {<About />} />
        <Route path = "/Services" element = {<Services />} />
        <Route path = "/Contact" element = {<Contact />} />
    </Routes>
  </>);
};

export default NavBar;
