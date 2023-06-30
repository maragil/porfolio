import arrow from '../../src/images/btnUp.png';

function BtnUp () {
    return (

        <button className="btn-scrolltop btn-scrolltop-on"
                id="btn_scrolltop">

            <a href="#">
                <img    src={arrow}
                        title='Volver arriba'
                        alt="Botón para volver arriba"
                        className='btnup'/>
            </a>

        </button>
    );
}

export default BtnUp;

