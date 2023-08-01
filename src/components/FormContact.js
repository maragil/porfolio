import { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";


function FormContact() {

    let isRobot = true;

    const form = useRef();

    const onSubmit = (data) => {

        if(isRobot === false){
            setValidCaptcha(true);

        emailjs.sendForm('service_gga7l6f', 'template_f3yvf2a', form.current, 'dSJbfIpynOc6bplP3')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
        },
        (error) => {
            console.log(error.text);
        });
        }else{
            console.log('Por favor acepta el captcha')
            setValidCaptcha(false);
        }
    };

    const { register, formState: { errors }, handleSubmit } = useForm();

    //reCaptcha
    const [validCaptcha, setValidCaptcha] = useState('null')

    const captcha = useRef(null);

    const onChange = () => {
        isRobot = false;
        // setValidCaptcha(true);

        // console.log(isRobot);
        // if(captcha.current.getValue()){
        //     
        // }else{
        //     console.log('Por favor acepta el captcha')
        //     setValidCaptcha(false);
        // }
    }


    return (

        <section id="contact" className="contact-section pb-3" >
            <div className="wave-contact"></div>
            <div className="container mt-3 contactContent d-flex flex-column align-items-center">

            <h1 className="text-center text-white">Contacta Conmigo</h1>

            <div className="col-lg-10">
                <form   ref={form}
                        onSubmit={handleSubmit(onSubmit)}>

                    <input  type="text"
                            name="user_name"
                            className="form-control form-control" placeholder="Nombre"
                            {...register('user_name', {
                                required: true
                            })}/>
                            {errors.user_name?.type === 'required' && <p className="mt-2 ms-3 text-danger">El campo nombre es requerido</p>}

                    <input  type="email"
                            name="user_email"
                            className="form-control mt-3"
                            placeholder="Email"
                            {...register('user_email', {
                                required: true,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                            })}/>
                            {errors.user_email?.type === 'required' && <p className="mt-2 ms-3 text-danger">El campo email es requerido</p>}
                            {errors.user_email?.type === 'pattern' && <p className="mt-2 ms-3 text-danger">El campo email es incorrecto</p>}

                    <input  type="text"
                            name="subject"
                            className="form-control mt-3"
                            placeholder="Asunto"
                            {...register('subject', {
                                required: true
                            })}/>
                            {errors.subject?.type === 'required' && <p className="mt-2 ms-3 text-danger">El campo asunto es requerido</p>}

                    <div className="mt-3">
                        <textarea   className="form-control"
                                    rows="5"
                                    id="message"
                                    name="message"
                                    placeholder="Comentario"
                                    {...register('message', {
                                        required: true,
                                        maxLength: 500
                                    })}/>
                                    {errors.message?.type === 'required' && <p className="mt-2 ms-3 text-danger">El campo comentario es requerido</p>}
                                    {errors.message?.type === 'maxLength' && <p className="mt-2 ms-3 text-danger">El campo Comentario debe tener menos de 500 caracteres</p>}
                    </div>

                    <div className="recaptcha">
                        <ReCAPTCHA
                        ref={captcha}
                        sitekey="6LcAf04nAAAAAFRxQvFAKrc6vOliSvZohxMtVSc2"
                        onChange={onChange}
                        />
                    </div>
                    {
                        validCaptcha === false && <div>
                            <p className="mt-2 text-danger text-center">Por favor acepta el captcha</p>
                        </div>
                    }

                    <input  type="submit"
                            value="Enviar"
                            className="btn bg-dark text-white btn-outline-dark mt-3" />
                </form>
            </div>

            </div>

        </section>

    );
}

export default FormContact;