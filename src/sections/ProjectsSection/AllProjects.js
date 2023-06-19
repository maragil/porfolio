import OneProject from "./OneProject";

function AllProjects ({data}) {

    // const [data, setData] = useState(projects);

    const htmlData = data.map((eachProject) => {
        return <OneProject eachProject={eachProject}/>;
    });

    return (
        <section className="container" id="projects">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h2 className="project-title">Proyectos</h2>
                    <p>Mira mis proyectos más recientes</p>
                </div>

                {/* <!-- Proyectos --> */}

                <ul className="row justify-content-center gap-3">
                    {htmlData}
                </ul>
            </div>

        </section>

    );
}

export default AllProjects;