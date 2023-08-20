function DetailTec ({eachImg}) {

      return (


            <img  className='img-fluid logo-tec'
                  src={`/img/img-tec/${eachImg.logo}`}
                  alt={`Icono de ${eachImg.name}`}/>
      )
}

export default DetailTec;