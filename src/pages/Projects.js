function Projects () {

    return (
        <section className="container" id="projects">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h2 className="project-title">Proyectos</h2>
                    <p>Mira mis proyectos más recientes</p>
                </div>

                {/* <!-- Proyectos --> */}

                <ul className="row justify-content-center gap-3" >

                    {/* <!-- Proyecto 1 --> */}
                    <div className="col-md-5 card mt-3">
                        <div className="card-body-overlay mt-2">
                            <h5 className="card-title text-center">
                                <a href="#repoGitbub" className="text-reset">Nombre del proyecto 1</a>
                            </h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ea?</p>
                            <p>Tecnologías</p>
                            <div className="link-git text-center">
                                <a href="#repoGithub">
                                    <i className="fab fa-github text-dark">Repo</i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Proyecto 2 --> */}
                    <div className="col-md-5 card  mt-3">
                        <div className="card-body-overlay mt-2">
                            <h5 className="card-title text-center">
                                <a href="#repoGitbub" className="text-reset">Nombre del proyecto 2</a>
                            </h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ea?</p>
                            <div className="link-git text-center">
                                <a href="#repoGithub">
                                    <i className="fab fa-github text-dark">Repo</i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 3 */}
                    <div className="col-md-5 card mt-3">
                        <div className="card-body-overlay mt-2">
                            <h5 className="card-title text-center">
                                <a href="#repoGitbub" className="text-reset">Nombre del proyecto 1</a>
                            </h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ea?</p>
                            <p>Tecnologías</p>
                            <div className="link-git text-center">
                                <a href="#repoGithub">
                                    <i className="fab fa-github text-dark">Repo</i>
                                </a>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>

        </section>

    )
}

export default Projects;