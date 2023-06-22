import fotoArrow from '../../src/images/btnUp.png';

function BtnUp ({handleClick}) {
    return (
        <button className="btn-scrolltop"
                id="btn_scrolltop"
                onClick={handleClick}>
                    <img    src={fotoArrow}
                            title='Volver arriba'
                            alt="Botón para volver arriba"
                            className='btnup'/>
            {/* <i className="fa-solid fa-angles-up btnup"></i> */}
        </button>

    );
}

export default BtnUp;