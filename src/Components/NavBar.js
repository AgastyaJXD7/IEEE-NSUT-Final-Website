import './NavBar.css'
import ieeelogo from '../Images/ieeelogo.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='NavBar_Container'>
        <div className='NavBar_Image'>
          <img src={ieeelogo} alt=''/>
        </div>
        <Link to="/" className='NavBar_Item'>Home</Link>
        <Link to="/about" className='NavBar_Item'>About</Link>
        <Link to="/events" className='NavBar_Item'>Events</Link>
        <Link to="/gallery" className='NavBar_Item'>Gallery</Link>
        <Link to="/awards" className='NavBar_Item'>Awards</Link>

        <div className='NavBar_ContactContainer'>
            <Link to="/contact" className='NavBar_Contact'>Contact</Link>
        </div>
    </div>
  )
}

export default NavBar