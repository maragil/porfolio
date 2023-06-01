import './App.css';
import '../src/css/main.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {
    return (
        <div className="App">
            <header className="header">

                {/*NAVBAR */}
                <Navbar/>

                {/* <!-- HERO --> */}
                <Hero/>

            </header>

        {/* <!-- ABOUT ME --> */}
        <AboutMe/>

        {/* <!-- PROJECTS --> */}
        <Projects/>        

        {/* <!-- FOOTER --> */}
        <Footer/>
    </div>
  );
}

export default App;
