import Logo from '../components/Logo';

const Header = () => {
  return (
    <header>
      <div className='w-2/5 flex flex-col items-center align-middle text-center'>
        <div className="text-3xl md:text-9xl">
          <Logo />
        </div>
        <div className="text-sm md:text-3xl">
          Saúde · Seguros · Previdência
        </div>
      </div>
    </header>
  )

};

export default Header;
