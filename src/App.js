import './App.css';
import '../src/css/main.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Projects from './sections/ProjectsSection/AllProjects';

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
