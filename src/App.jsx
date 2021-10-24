import {useState} from 'react'
import Topbar from './components/Topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Menu from './components/menu/Menu';
import Footer from './components/Footer/Footer';


import './app.scss'

function App() {
const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      {/* Top */}
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
      {/* Section */}
            {/* Intro */}
            {/* portfolio */}
            {/* work*/}
    </div>
  );
}

export default App;
