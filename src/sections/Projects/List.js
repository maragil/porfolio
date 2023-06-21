import Detail from "./Detail";

function List ({data}) {

    // const [data, setData] = useState(projects);

    const htmlData = data.map((eachProject) => {
        return <Detail eachProject={eachProject}/>;
    });

    return (
        <section className="container" id="projects">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h2 className="project-title fw-bold">Proyectos</h2>
                    <p>Mira mis proyectos más recientes</p>
                </div>

                {/* <!-- Proyectos --> */}

                <ul className="row justify-content-center gap-5">
                    {htmlData}
                </ul>
            </div>

        </section>

    );
}

export default List;