import OneProject from "./OneProject";

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
                    <OneProject/>

                    {/* <!-- Proyecto 2 --> */}
                    <OneProject/>

                    {/* Proyecto 3 */}
                    <OneProject/>

                    <OneProject/>

                </ul>
            </div>

        </section>

    )
}

export default Projects;