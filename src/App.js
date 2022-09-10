import './App.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer';
//import Home from './Components/Home';
//import NavBar from './Components/Navbar/NavBar';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import GalleryScreen from './Screens/GalleryScreen';
import EventScreen from './Screens/EventScreen';
import ContactScreen from './Screens/ContactScreen';
// Overlapping CSS and errors in <NavBar/> <Home/>
         

function App() {
  return (
   <Router>
         <NavBar/>
         <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/about' element={<AboutScreen/>}/>
          <Route path='/events' element={<EventScreen/>}/>
          <Route path='/gallery' element={<GalleryScreen/>}/>
          <Route path='/awards'  element={<AboutScreen/>}/>
          <Route path='/contact' element={<ContactScreen/>}/>
         </Routes>     
         <Footer/>   
   </Router>
  );
}

export default App;
