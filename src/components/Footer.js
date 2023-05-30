function Footer() {

    return (

        <footer className="bg-dark text-white ">
            <div className="">
                <nav className="d-flex justify-content-between px-5 pt-4">
                    {/* <!-- Logo --> */}
                    <a  href="#home"
                        className= "text-reset h5 text-decoration-none" > Maria </a>
                    {/* <!-- Social nerworks --> */}
                    <ul className="list-unstyled">
                        <li>
                            <a  href="https://github.com/maragil"
                                target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github fa-2x socialicons text-white"></i>
                            </a>
                            <a  href="https://www.linkedin.com/feed/"
                                target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin fa-2x socialicons text-white"></i>
                            </a>
                            <a  href="http://"
                                target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter fa-2x socialicons text-white"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;