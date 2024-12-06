export default function Contact() {
  return (
    <article id="contact" className="container m-auto scroll-mt-24 my-24">
      <div className="rounded-3xl bg-mainLight dark:bg-secondDark py-5">
        <h2 className="text-4xl md:text-5xl font-bold my-5 text-center text-white dark:text-black">
          ¡Contactame!
        </h2>
        <div className="my-5 mx-auto w-3/4 sm:w-4/5 lg:w-2/3">
          <h2 className="text-2xl font-bold my-5 text-white dark:text-black">Completa el formulario</h2>
          <form
            className="grid grid-cols-1 gap-5"
            action="https://getform.io/f/e5d6148d-b7c0-4c63-94e5-80161d22ea72"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="p-3 bg-detailColor rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 bg-detailColor rounded-lg"
            />
            <textarea
              type="text"
              name="message"
              placeholder="Mensaje"
              className="h-32 resize-none p-2 bg-detailColor rounded-lg"
            />
            <input type="hidden" name="_gotcha" style={{ display: "none" }} />

            <button
              type="submit"
              className="font-bold hover:bg-slate-400 rounded-sm transition text-center p-2 w-20 m-auto text-white dark:text-black"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </article>
  );
}
