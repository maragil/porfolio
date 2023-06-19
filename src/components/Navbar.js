import '../styles/layout/Navbar.scss';

function Navbar () {

    return(
    //     <nav class="navbar navbar-expand-sm navbar-dark pt-3 h4" id="navbar">
    //     <div class="container">
    //       <a class="navbar-brand " href="#">
    //         <img src="./assets/images/logo-landing.png" alt="logo" class="img-logo"
    //       /></a>
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNavDropdown"
    //         aria-controls="navbarNavDropdown"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    
    //       <div class="collapse navbar-collapse" id="navbarNavDropdown">
    //         <ul class="navbar-nav ms-auto">
    //           <li class="nav-item">
    //             <a class="nav-link active" aria-current="page" href="#">Inicio</a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="#">Shop</a>
    //           </li>
    //           <li class="nav-item"><a class="nav-link" href="#">About</a></li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="#">Register</a>
    //           </li>
    //           <li class="nav-item"><a class="nav-link" href="#">Sign in</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
        <nav className="navbar navbar-light navbar-expand-md pt-4 text-dark text-uppercase fixed-top">
            <div className="container">

                        {/* <!-- LOGO --> */}
                    <a  href="#home"
                    className="navbar-brand text-decoration-none h5 text-logo" >&#8826; MaraGil &#x2571;&#x227B;</a>

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