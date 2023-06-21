// import './App.css';
import '../src/styles/App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import ListProjects from './sections/ProjectsSection/ListProjects';
import projects from '../src/data/projects.json';
import { useState } from 'react';

function App() {

    const [data, setData] = useState(projects);

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
            <ListProjects  data={data}/>

            {/* <!-- FOOTER --> */}
            <Footer/>
        </div>
    );
}

export default App;
