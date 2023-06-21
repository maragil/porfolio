import '../../styles/layout/ProjectDetail.scss';

function ProjectDetail ({eachProject}){

    return (

        <div className="col-md-5 card mt-3 card">
            <div className="card-body-overlay mt-2 d-flex flex-column">
                <h5 className="card-title text-center" >

                    <a href={eachProject.url}
                        className="text-reset fw-bold text-decoration-none"
                        target= "_blank"> {eachProject.name}</a>

                </h5>

                <p className="card-text text-center">{eachProject.desc}</p>

                <div className='div-img'>

                    <a href={eachProject.url}
                    className="text-reset "
                        target= "_blank">

                        <img    src= {`/img/${eachProject.img}`}
                                alt={`Imagen del proyecto ${eachProject.name}`}
                                className="img-project img-fluid"/>

                    </a>
                </div>

                <p className="d-flex flex-row justify-content-around">{eachProject.tec}
                    <a href={eachProject.repo}
                        target="_blank">
                        <i className="fab fa-github text-dark"></i>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default ProjectDetail;