import Logo from '../components/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p className='mb-3'><Logo color="#fff" /> ― Saúde · Seguros · Previdência </p>
      <p>
        © {new Date().getFullYear()} RADAR CORRETAGEM DE SEGUROS E SAÚDE LTDA ME — Todos os
        direitos reservados.
      </p>
    </footer>
  )

};

export default Footer;
