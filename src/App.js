import '../src/styles/App.scss';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import List from './sections/Projects/List';
import BtnUp from './components/BtnUp';
import projects from '../src/data/projects.json';
import {  useState } from 'react';


function App() {

    const [data, setData] = useState(projects);


    return (
        <div className="App">


            <header className="header">

                {/*NAVBAR */}
                <Navbar/>

                {/* <!-- HERO --> */}
                <Hero/>

                <BtnUp />

            </header>

            {/* <!-- ABOUT ME --> */}
            <AboutMe/>

            {/* <!-- PROJECTS --> */}
            <List  data={data}/>

            {/* <!-- FOOTER --> */}
            <Footer/>
        </div>
    );
}

export default App;
