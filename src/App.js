import './App.css';
import '../src/css/main.css';
import foto from '../src/images/foto.JPG';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="header">
            <div className="container">

                {/*NAVBAR */}
                <Navbar/>

        {/* <!-- DESCRIPCION --> */}
                <div id="home" className="row py-3 text-white min-vh-100 align-items-center flex-wrap m-0">
            {/* <!-- TITULO--> */}
                    <div className="text-center container">
                        <h1 className="h1">María Araujo Gil</h1>
                        {/* <!-- FRASE --> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, tempore.</p>
                        {/* <!-- LINKS --> */}
                        <div className="p-5 icons d-flex justify-content-evenly">
                            <a  href="https://github.com/maragil"
                                target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github fa-3x socialicons text-white"></i>
                            </a>
                            <a  href="https://www.linkedin.com/feed/"
                                target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin fa-3x socialicons text-white"></i>
                            </a>
                            <a  href="http://"
                                target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter fa-3x socialicons text-white"></i>
                            </a>
                        </div>
                        {/* <!-- BOTÓN --> */}
                        <a className="btn btn-outline-light btn-lg"
                            aria-label="Más acerca de mi"
                            href="#aboutme">Más sobre mi</a>
                    </div>
                </div>
            </div>
    </header>

        {/* <!-- ABOUT ME --> */}
        <section className="col-auto py-5 about mb-5 d-flex justify-content-center" id="aboutme">
            <div className="container row">
                <div className="img col-5 d-none d-lg-block align-self-center">
                <img src={foto} alt="Imagen de perfil"
                        className="about__img img-thumbnail"/>
                </div>
                <div className="col-7 mt-5 text-center">
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
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="project-title">Proyectos</h2>
                    <p>Mira mis proyectos más recientes</p>
                </div>

                {/* <!-- Proyectos --> */}
                <ul className="row container justify-content-around" >
                    {/* <!-- Proyecto 1 --> */}
                    <div className="col-5 card">
                        <div className="card-body">
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
                    <div className="card col-5">
                        <div className="card-body">
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
                </ul>
            </div>

        </section>

        {/* <!-- FOOTER --> */}
        <Footer/>
    </div>
  );
}

export default App;
