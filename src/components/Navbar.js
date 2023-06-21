function Navbar () {

    return(

        <nav className="navbar navbar-light navbar-expand-md pt-4 text-dark text-uppercase fixed-top fw-bold">
            <div className="container">

                        {/* <!-- LOGO --> */}
                    <a  href="#home"
                    className="navbar-brand text-decoration-none text-reset h5 text-logo fw-bold" >&#8826; MaraGil &#x2571;&#x227B;</a>

                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse show" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a  className="nav-link active"
                                href="#projects"
                                title="Proyectos Maria Araujo">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link active"
                                href="#aboutme"
                                title="Sobre Maria Araujo">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active"
                                target="_blank"
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