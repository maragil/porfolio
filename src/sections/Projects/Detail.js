import DetailTec from "./DetailTec";

function Detail ({eachProject}){

    const tecImg = eachProject.tec.map((eachImg) => {
        return ( <DetailTec eachImg={eachImg}/>)
    });

    return (

        <div className="col-md-5 mt-3 card d-flex flex-column justify-content-center">
            <div className="card-body-overlay mt-2"  >
                <h5 className="card-title text-center" >

                    <a href={eachProject.url}
                        className="text-reset fw-bold text-decoration-none"
                        target= "_blank"
                        rel="noreferrer"
                        title={`Ver web ${eachProject.name}`}> {eachProject.name}</a>

                        <a  href={eachProject.repo}
                            target="_blank"
                            rel="noreferrer"
                            title={`Repositorio de ${eachProject.name}`}>
                        <i className="fab fa-github ms-3"></i>
                    </a>
                </h5>

                <div className='div-img'>

                    <a href={eachProject.url}
                    className="text-reset "
                        target= "_blank"
                        rel="noreferrer">

                        <img    src= {`/img/${eachProject.img}`}
                                alt={`Imagen del proyecto ${eachProject.name}`}
                                className="img-project img-fluid"
                                title={`Ver web ${eachProject.name}`}/>

                    </a>
                </div>

                <p className="card-text text-center">{eachProject.desc}</p>

                <div className="d-flex justify-content-center gap-3 mb-3">
                    {tecImg}
                </div>
            </div>
        </div>
    )
}

export default Detail;