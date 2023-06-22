import foto from '../../src/images/foto.JPG';

function AboutMe () {

    return (
        <section className="col-lg-auto py-5 about mb-5 d-flex justify-content-center" id="aboutme">
            <div className="container row">
                <div className="img col-5 d-none d-lg-block align-self-center">
                <img    src={foto} alt="Imagen de perfil"
                        className="about__img img-thumbnail"/>
                </div>
                <div className="col-lg-7 mt-5 text-center">
                    <h2 className="about__title">Sobre mi</h2>
                    <p className="text-muted">Después de muchos años en el mundo del retail, sentí que era el momento de darle un giro a mi vida, y aquí estoy motivada por y para el cambio.</p>

                    {/* <!-- BOTÓN --> */}
                    <a className="btn btn-outline-dark btn-lg text-uppercase bg-dark text-white"
                        aria-label="cv"
                        title="CV Maria Araujo"
                        target="_blank"
                        rel="noreferrer"
                        href="https://drive.google.com/file/d/10o8RU52tN787RjLF5TvUAIs-Zd5tM2qg/view">cv</a>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;