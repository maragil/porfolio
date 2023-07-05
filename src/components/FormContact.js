import { useForm } from "react-hook-form";


function FormContact() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (


        <section id="contact" className="contact-section pb-3" >
            <div className="wave-contact"></div>
            <div className="container mt-3 contactContent d-flex flex-column align-items-center">

            <h1 className="text-center text-white">Contacta Conmigo</h1>

            <div className="col-lg-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input  type="text"
                            className="form-control form-control" placeholder="Nombre"
                            {...register('nombre', {
                                required: true
                            })}/>
                            {errors.nombre?.type === 'required' && <p className="mt-2 ms-3">El campo nombre es requerido</p>}

                    <input  type="email"
                            className="form-control mt-3"
                            placeholder="Email"
                            {...register('email', {
                                required: true,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                            })}/>
                            {errors.email?.type === 'required' && <p className="mt-2 ms-3">El campo email es requerido</p>}
                            {errors.email?.type === 'pattern' && <p className="mt-2 ms-3">El campo email es incorrecto</p>}

                    <input  type="text"
                            className="form-control mt-3"
                            placeholder="Asunto"
                            {...register('asunto', {
                                required: true
                            })}/>
                            {errors.asunto?.type === 'required' && <p className="mt-2 ms-3">El campo asunto es requerido</p>}

                    <div className="mt-3">
                        <textarea   className="form-control"
                                    rows="5" id="comment"
                                    name="text"
                                    placeholder="Comentario"
                                    {...register('comentario', {
                                        required: true,
                                        maxLength: 500
                                    })}>
                                    {/* {errors.comentario?.type === 'required' && <p className="mt-2 ms-3">El campo comentario es requerido</p>} */}
                                    {/* {errors.comentario?.type === 'maxLength' && <p className="mt-2 ms-3">El campo Comentario debe tener menos de 500 caracteres</p>} */}
                        </textarea>
                    </div>

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