import './App.css';
import '../src/css/main.css';
import foto from '../src/images/foto.JPG';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';

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
        <section className="col-lg-auto py-5 about mb-5 d-flex justify-content-center" id="aboutme">
            <div className="container row">
                <div className="img col-5 d-none d-lg-block align-self-center">
                <img src={foto} alt="Imagen de perfil"
                        className="about__img img-thumbnail"/>
                </div>
                <div className="col-lg-7 mt-5 text-center">
                    <h2 className="about__title">Sobre mi</h2>
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem, cupiditate tempore facilis vero doloribus aliquid numquam perferendis nisi porro.</p>
                    {/* <!-- BOTÓN --> */}
                    <p className="">
                        <a className="btn btn-outline-dark btn-lg text-uppercase bg-dark text-white"
                        aria-label="cv"
                        target="_blank"
                        href="https://drive.google.com/file/d/10o8RU52tN787RjLF5TvUAIs-Zd5tM2qg/view">cv</a>
                    </p>
                </div>
            </div>
        </section>

        {/* <!-- PROJECTS --> */}
        <section className="container" id="projects">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h2 className="project-title">Proyectos</h2>
                    <p>Mira mis proyectos más recientes</p>
                </div>

                {/* <!-- Proyectos --> */}

                <ul className="row justify-content-center gap-3" >

                    {/* <!-- Proyecto 1 --> */}
                    <div className="col-md-5 card mt-3">
                        <div className="card-body-overlay mt-2">
                            <h5 className="card-title text-center">
                                <a href="#repoGitbub" className="text-reset">Nombre del proyecto 1</a>
                            </h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ea?</p>
                            <p>Tecnologías</p>
                            <div className="link-git text-center">
                                <a href="#repoGithub">
                                    <i className="fab fa-github text-dark">Repo</i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Proyecto 2 --> */}
                    <div className="col-md-5 card  mt-3">
                        <div className="card-body-overlay mt-2">
                            <h5 className="card-title text-center">
                                <a href="#repoGitbub" className="text-reset">Nombre del proyecto 2</a>
                            </h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ea?</p>
                            <div className="link-git text-center">
                                <a href="#repoGithub">
                                    <i className="fab fa-github text-dark">Repo</i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 3 */}
                    <div className="col-md-5 card mt-3">
                        <div className="card-body-overlay mt-2">
                            <h5 className="card-title text-center">
                                <a href="#repoGitbub" className="text-reset">Nombre del proyecto 1</a>
                            </h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ea?</p>
                            <p>Tecnologías</p>
                            <div className="link-git text-center">
                                <a href="#repoGithub">
                                    <i className="fab fa-github text-dark">Repo</i>
                                </a>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>

        </section>

        {/* <!-- FOOTER --> */}
        <Footer/>
    </div>
  );
}

export default App;
