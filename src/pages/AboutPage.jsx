import Footer from '../components/Footer';
import Logo from '../components/Logo';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className='bg-gray-100'>
        <div className="max-w-4xl mx-auto space-y-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Missão e Valores</h2>
          Texto;
        </div>
      </section>
      {/* Depoimentos */}
      <section className="py-16 px-6">
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
      <section>
        <div className='text-center text-7xl py-16'>
          <Logo />
          <p className='my-3 text-lg'>Saúde · Seguros · Previdência </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
