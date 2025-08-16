const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p><b>Fale conosco:</b> (21)96490-3632</p>
      <p className='mt-3'>
        Para qualquer dúvida, reclamação ou sugestão <b>claudiaplanosdesaude@gmail.com</b>
      </p>
      <p className='mt-3'>
        © {new Date().getFullYear()} RADAR CORRETAGEM DE SEGUROS E SAÚDE LTDA ME — Todos os
        direitos reservados.
      </p>
    </footer>
  )
};

export default Footer;
