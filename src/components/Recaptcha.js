import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Recaptcha () {

    const [validCaptcha, setValidCaptcha] = useState(null);

    const captcha = useRef(null);

    const onChange = () => {

        if(captcha.current.getValue()){
            console.log('El usuario no es un robot')
            setValidCaptcha(true)
        }
    }

    return (
        <>
            <div className="recaptcha">
                <ReCAPTCHA
                    ref={captcha}
                    sitekey="6LcAf04nAAAAAFRxQvFAKrc6vOliSvZohxMtVSc2"
                    onChange={onChange}
                />
            </div>
            {validCaptcha === false && <div className="msj_captcha">
                <p className="mt-2 text-danger text-center">Por favor acepta el captcha</p>
            </div>}
        </>
    )


}

export default Recaptcha;