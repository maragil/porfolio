import ReCAPTCHA from "react-google-recaptcha";

function Recaptcha () {

    const onChange = () => {
        console.log('hubo un cambio');
    }

    return (

        <div className="recaptcha">
            <ReCAPTCHA
            className="rec"
                sitekey="6LcAf04nAAAAAFRxQvFAKrc6vOliSvZohxMtVSc2"
                onChange={onChange}
            />
        </div>

    )


}

export default Recaptcha;