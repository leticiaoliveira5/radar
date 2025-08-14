function ContactPage() {
  return (

      <section id="contato" className="py-16 px-6 bg-blue-700 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Fale com um de nossos consultores
        </h2>
        <form className="max-w-3xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="p-3 rounded-lg text-black"
            required
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="p-3 rounded-lg text-black"
            required
          />
          <input
            type="tel"
            placeholder="Seu telefone"
            className="p-3 rounded-lg text-black"
            required
          />
          <textarea
            placeholder="Mensagem"
            rows="4"
            className="p-3 rounded-lg text-black"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg"
          >
            Enviar
          </button>
        </form>
      </section>
  )
}

export default ContactPage;
