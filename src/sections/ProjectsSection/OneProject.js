function OneProject ({eachProject}){

    return (

        <div className="col-md-5 card mt-3">
            <div className="card-body-overlay mt-2">
                <h5 className="card-title text-center">
                    <a href={eachProject.url}
                        className="text-reset"
                        target= "_blank"> {eachProject.name}</a>
                </h5>
                <p className="card-text">{eachProject.desc}</p>
                <p>{eachProject.tec}</p>
                <div className="link-git text-center">
                    <a href={eachProject.repo}
                    target="_blank">
                        <i className="fab fa-github text-dark"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default OneProject;