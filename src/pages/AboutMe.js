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
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem, cupiditate tempore facilis vero doloribus aliquid numquam perferendis nisi porro.</p>

                    {/* <!-- BOTÓN --> */}
                    <a className="btn btn-outline-dark btn-lg text-uppercase bg-dark text-white"
                        aria-label="cv"
                        target="_blank"
                        href="https://drive.google.com/file/d/10o8RU52tN787RjLF5TvUAIs-Zd5tM2qg/view">cv</a>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;