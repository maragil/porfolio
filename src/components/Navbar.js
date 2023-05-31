function Navbar () {

    return(
        <nav className="navbar navbar-light navbar-expand-sm bg-transparent pt-4 fixed-top text-dark text-uppercase">
            <div className="container">

                        {/* <!-- LOGO --> */}
                {/* <a  href="#home"
                    className="col-12 col-md-auto text-reset h5 text-decoration-none" >  MaraGil </a> */}
                    <a  href="#home"
                    className="navbar-brand text-decoration-none text-reset h5" >&#8826; MaraGil &#x2571;&#x227B;</a>

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
                                href="#projects">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link active"
                                href="#aboutme">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active"
                                target="_blank"
                                href="https://drive.google.com/file/d/10o8RU52tN787RjLF5TvUAIs-Zd5tM2qg/view">Currículum</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;