import Footer from '../components/Footer';
import Logo from '../components/Logo';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className='bg-gray-100'>
        <div className="max-w-4xl mx-auto space-y-8 py-16">
          Texto;
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
