export default function Contact() {
  return (
    <article id="contact" className="container m-auto px-8 scroll-mt-24 sm:rounded-md bg-veriPery py-5">
      <h2 className="text-4xl md:text-5xl font-bold my-5 text-center">¡Contactame!</h2>
      <div className="my-5 mx-2  md:mx-80 md:my-10">
        <h2 className="text-2xl font-bold my-5">Completa el formulario</h2>
        <form
          className="grid grid-cols-1 gap-5"
          action="https://getform.io/f/e5d6148d-b7c0-4c63-94e5-80161d22ea72"
          method="POST"
        >
          <input type="text" name="name" placeholder="Nombre" className="p-3" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Mensaje"
            className="h-32 resize-none p-2"
          />
          <input type="hidden" name="_gotcha" style={{ display: "none" }} />

          <button
            type="submit"
            className="font-bold hover:bg-slate-400 rounded-sm transition text-center p-2 w-20 m-auto"
          >
            Enviar
          </button>
        </form>
      </div>
    </article>
  );
}
