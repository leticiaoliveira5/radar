const Header = () => {
  return (
    <header className='flex flex-col md:flex-row bg-sky-700 items-center align-middle md:h-[380px]'>
      <div className='w-full h-full hidden md:inline-block lg:w-5/12 lg:ml-10' style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}>
       <img src='banner_1.webp' alt="" className='h-full' />
      </div>
      <div className="w-full lg:w-7/12 text-white p-12 md:px-28 text-center lg:mr-10">
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
      </div>
    </header>
  )

};

export default Header;
