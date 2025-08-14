import Form from '../components/Form';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-sky-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Proteção e Tranquilidade para Você e Sua Família
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Especialistas em planos de saúde e seguros sob medida para suas
          necessidades.
        </p>
        <a
          href="#contato"
          className="bg-orange-400 hover:bg-orange-500 text-amber-50 font-semibold px-6 py-3 rounded-lg"
        >
          Solicite uma Cotação
        </a>
      </header>

      {/* Serviços */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Planos de Saúde</h3>
            <p>
              Oferecemos opções individuais, familiares e empresariais, com as
              melhores operadoras do mercado.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Seguros de Vida</h3>
            <p>
              Proteja o futuro da sua família com coberturas personalizadas e
              preços acessíveis.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Planos Odontológicos</h3>
            <p>
              Cuide do seu sorriso com cobertura ampla e atendimento de
              qualidade em todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">O que dizem nossos clientes</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <blockquote className="bg-white p-6 rounded-lg shadow">
            "Fui muito bem atendido e consegui um plano de saúde com ótimo
            custo-benefício."
            <footer className="mt-4 text-sm text-gray-600">
              — Carlos M.
            </footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow">
            "Equipe atenciosa e soluções rápidas. Recomendo!"
            <footer className="mt-4 text-sm text-gray-600">
              — Fernanda P.
            </footer>
          </blockquote>
        </div>
      </section>
      <section id="contato" className="py-16 px-6 bg-sky-700 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Fale com um de nossos consultores
        </h2>
        <Form />
      </section>
      {/* Rodapé */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>
          © {new Date().getFullYear()} Radar Corretora Saúde & Seguros — Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
