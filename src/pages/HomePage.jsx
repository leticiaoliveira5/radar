import Form from '../components/Form';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Companies from '../components/Companies';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

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

      <section className="bg-gray-100 py-16 px-6">
        <div className='max-w-6xl mx-auto'>
          <h2 className="text-3xl font-bold text-center mb-10">
            Operadoras
          </h2>
          <Companies />
        </div>
      </section>

      <section id="contato" className="py-16 px-6 bg-sky-700 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Fale com um de nossos consultores
        </h2>
        <Form />
      </section>
      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default HomePage;
