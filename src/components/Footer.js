//ToDo: implementar el botón cn JS.
import ScrollToTop from "react-scroll-to-top";

function Footer() {

    return (
<>
        <ScrollToTop smooth top="500" color="darkorchid"/>

        <footer className="col-ms-5 bg-dark text-white">
                <nav className=" d-flex  justify-content-between align-items-center pt-3 footer-nav footer">
                    {/* <!-- Logo --> */}
                    <a  href="#home"
                    title="Volver al inicio"
                        className= "col-sm-3 text-reset h5 text-decoration-none" >&#8826; MaraGil &#x2571;&#x227B;</a>
                    {/* <!-- Social nerworks --> */}
                    <ul className="list-unstyled col-auto">
                        <li>
                            <a  href="https://github.com/maragil"
                                target="_blank"
                                rel="noreferrer"
                                className="me-4"
                                title="GitHub Maria Araujo">
                                <i className="fab fa-github fa-2x socialicons text-white "></i>
                            </a>
                            <a  href="https://www.linkedin.com/feed/"
                                target="_blank"
                                rel="noreferrer"
                                className="me-4"
                                title="Linkedin Maria Araujo">
                                <i className="fab fa-linkedin fa-2x socialicons text-white"></i>
                            </a>
                            <a  href="https://twitter.com/araujomaria84"
                                target="_blank"
                                rel="noreferrer"
                                className="me-3"
                                title="Twitter Maria Araujo">
                                <i className="fab fa-twitter fa-2x socialicons text-white"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
        </footer>
</>
    );
}

export default Footer;