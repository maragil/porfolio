function Hero () {

    return (
    <div className="container">
        <div id="home" className="row py-3 text-white min-vh-100 align-items-center flex-wrap m-0">

            {/* <!-- NOMBRE--> */}
            <div className="text-center">
                <h1 className="display-3 name">María Araujo Gil</h1>

                {/* <!-- CITA--> */}
                    <p className="fs-4 quote">
                        No es donde estábamos, ni donde estamos, sino donde queremos estar.
                        {/* No hay una segunda oportunidad para una primera impresión. */}
                        </p>

                {/* <!-- LINKS --> */}
                <div className="p-5 icons d-flex justify-content-evenly">
                    <a  href="https://github.com/maragil"
                        target="_blank"
                        title="GitHub Maria Araujo">
                        <i className="fab fa-github fa-3x socialicons text-white"></i></a>

                    <a  href="https://www.linkedin.com/feed/"
                        target="_blank"
                        title="Linkedin Maria Araujo">
                        <i className="fab fa-linkedin fa-3x socialicons text-white"></i></a>

                    <a  href="https://twitter.com/araujomaria84"
                        target="_blank"
                        title="Twitter Maria Araujo">
                        <i className="fab fa-twitter fa-3x socialicons text-white"></i></a>
                </div>

                {/* <!-- BOTÓN --> */}
                <a className="btn btn-outline-light btn-lg"
                    aria-label="Más acerca de mi"
                    href="#aboutme">Más sobre mi</a>
            </div>
        </div>
    </div>
    )
}

export default Hero;