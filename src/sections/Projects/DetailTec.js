

function DetailTec ({eachImg}) {
   console.log(eachImg)
   // const tecImg = tecImgList.map((eachImg) => {
   //    return ( <p className="d-flex flex-row justify-content-around tec">{eachImg} </p>)
   // });

   // return(
   //    {tecImg}
   // )
   // console.log(tecImgList)

   // console.log(tecImg)
   //    return(
   //    {tecImg}
   // )
      return (
      // <p className="d-flex flex-row justify-content-around tec">{eachImg.logo} </p>
      <img className='img-fluid' src={`/img/img-tec/${eachImg.logo}`} />
      )
}

export default DetailTec;