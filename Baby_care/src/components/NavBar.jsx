import {Routes, Route, Link} from 'react-router-dom';

function NavBar () {

  return( 
  <>

    <ul className=''>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/About">About</Link></li>
        <li><Link to = "/Services">Services</Link></li>
        <li><Link to = "/Contact">Contact</Link></li>
        <li><Link to= "/login">Login</Link></li>
    </ul>
  </>);
};

export default NavBar;
