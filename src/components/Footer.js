function Footer() {

    return (

        <footer className="bg-dark text-white ">
            {/* <div className="container"> */}
                <nav className="d-flex justify-content-between pt-4 footer-nav footer">
                    {/* <!-- Logo --> */}
                    <a  href="#home"
                        className= "col-sm-3 text-reset h5 text-decoration-none ms-2" >&#8826; MaraGil &#x2571;&#x227B;</a>
                    {/* <!-- Social nerworks --> */}
                    <ul className="list-unstyled col-auto">
                        <li>
                            <a  href="https://github.com/maragil"
                                target="_blank"
                                className="me-3">
                                <i className="fab fa-github fa-2x socialicons text-white "></i>
                            </a>
                            <a  href="https://www.linkedin.com/feed/"
                                target="_blank"
                                className="me-3">
                                <i className="fab fa-linkedin fa-2x socialicons text-white"></i>
                            </a>
                            <a  href="http://"
                                target="_blank"
                                className="me-3">
                                <i className="fab fa-twitter fa-2x socialicons text-white"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            {/* </div> */}
        </footer>
    );
}

export default Footer;