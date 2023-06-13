import './App.css';
import '../src/css/main.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import { useState } from 'react';
import AllProjects from './sections/ProjectsSection/AllProjects';



function App() {

    // const [allProjects, setAllProjects] = useState(data)

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
            <AllProjects />

            {/* <!-- FOOTER --> */}
            <Footer/>
        </div>
    );
}

export default App;
