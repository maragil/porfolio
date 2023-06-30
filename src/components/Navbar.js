function Navbar () {

    return(

        <nav className="navbar navbar-light navbar-expand-sm pt-4 text-light fw-bold">
            <div className="container">

                        {/* <!-- LOGO --> */}
                    <a  href="#home"
                    className="navbar-brand text-decoration-none text-reset h5 logo fw-bold" >&#8826; MaraGil &#x2571;&#x227B;</a>

                <button className="navbar-toggler text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto text-uppercase">
                        <li className="nav-item">
                            <a  className="nav-link active text-light"
                                href="#projects"
                                title="Proyectos Maria Araujo">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link active text-light"
                                href="#aboutme"
                                title="Sobre Maria Araujo">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light"
                                target="_blank"
                                rel="noreferrer"
                                title="CV Maria Araujo"
                                href="https://drive.google.com/file/d/10o8RU52tN787RjLF5TvUAIs-Zd5tM2qg/view">Currículum</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;