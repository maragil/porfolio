function ContactMe () {

    return (


        <section id="contact" className="contact-section pb-3 pt-1" >
            <div className="container mt-3 contactContent d-flex flex-column align-items-center">

            <h1 className="text-center text-white">Contacta Conmigo</h1>

            <div className="col-lg-10">
                <form action="">
                    <input type="text" className="form-control form-control" placeholder="Nombre"/>
                    <input type="email" className="form-control mt-3" placeholder="Email"/>
                    <input type="text" className="form-control mt-3" placeholder="Asunto"/>
                    <div className="mt-3">
                        <textarea className="form-control" rows="5" id="comment" name="text" placeholder="Comentario"></textarea>
                    </div>
                </form>

                <button type="button" className="btn bg-dark text-white btn-outline-dark mt-3">Enviar</button>

            </div>

            </div>

        </section>

    );
}

export default ContactMe;