import '../src/styles/App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import List from './sections/Projects/List';
import BtnUp from './components/BtnUp';
import projects from '../src/data/projects.json';
import { useState } from 'react';


function App() {

    const [data, setData] = useState(projects);
    const [arrowUp, setArrowUp] = useState();

    const handleClick= (ev) => {
        setArrowUp(ev);
        console.log('hola')
    };

    return (
        <div className="App">

            <BtnUp  handleClick={handleClick}/>

            <header className="header">

                {/*NAVBAR */}
                <Navbar/>

                {/* <!-- HERO --> */}
                <Hero/>

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
