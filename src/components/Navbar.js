function Navbar () {

    return(

        <nav className="navbar navbar-light navbar-expand-sm pt-5 pb-5 fw-bold d-flex flex-column">
                        {/* <!-- LOGO --> */}
                    <a  href="#home"
                    className="text-decoration-none text-reset fs-4 logo fw-bold pb-3" >&#8826; MaraGil &#x2571;&#x227B;</a>

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
                            <a  className="nav-link active"
                                href="#projects"
                                title="Proyectos Maria Araujo">Proyectos</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active"
                                target="_blank"
                                rel="noreferrer"
                                title="CV Maria Araujo"
                                href="https://drive.google.com/file/d/1yM6awmTbaz9JzEsJcUje_p_mCiy426dx/view?usp=sharing">Currículum</a>
                        </li>

                        <li className="nav-item">
                            <a  className="nav-link active"
                                href="#contact"
                                title="Contacta conmigo">Contacto</a>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar;