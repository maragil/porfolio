import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Recaptcha () {

    const captcha = useRef(null);

    const onChange = () => {

        if(captcha.current.getValue()){
            console.log('El usuario no es un robot')
        }
    }

    return (

        <div className="recaptcha">
            <ReCAPTCHA
                ref={captcha}
                sitekey="6LcAf04nAAAAAFRxQvFAKrc6vOliSvZohxMtVSc2"
                onChange={onChange}
            />
        </div>

    )


}

export default Recaptcha;