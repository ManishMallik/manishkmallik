import './App.css';
import Projects from './pages/Projects';
//import Resume from './pages/Resume';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import BottomBar from './components/BottomBar';
import ToyotaTripsPage from './pages/ToyotaTrips';
import RPG from './pages/RPG';
import ClaimSafePage from './pages/ClaimSafe';
//import logo from './images/mkm_logo.jpg';
import { BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
//manishkmallik/

function App() {
  return (
    <div className='App'>
      <div>
        <Navigation/>
      </div>
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route exact path="/" element={<Home/>} /> 
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/toyotatrips" element={<ToyotaTripsPage/>} />
              <Route path="/readypetgo" element={<RPG/>} />
              <Route path="/claimsafe" element={<ClaimSafePage/>} />
            </Routes>
        </BrowserRouter>
      </div>
      <div className='contact-bar'>
        <BottomBar/>
      </div>
    </div>
  );
}

export default App;
