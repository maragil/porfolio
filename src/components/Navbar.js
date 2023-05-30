function Navbar () {

    return(
        <nav className="row navbar-expand-sm navbar-transpatent px-3 pt-4 fixed-top text-dark align-items-center text-uppercase">
                    {/* <!-- LOGO --> */}
                    <a  href="#home"
                        className="col-auto text-reset h5 text-decoration-none" > Maria </a>

                <button className="toggler navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="col-auto navbar-collapse collapse text-dark" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li className="nav-item h6 "><a className="nav-link text-reset" href="#projects">Proyectos</a></li>
                        <li className="nav-item h6"><a className="nav-link text-reset" href="#aboutme">Sobre mí</a></li>
                        <li className="nav-item h6"><a className="nav-link text-reset" target="_blank" href="https://drive.google.com/file/d/10o8RU52tN787RjLF5TvUAIs-Zd5tM2qg/view">Currículum</a></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;