import AmilSvg from '../icons/AmilSvg';
import UnimedSvg from '../icons/UnimedSvg';
import PortoSvg from '../icons/PortoSvg';
import GoldenSvg from '../icons/GoldenSvg';

const Companies = () => {
return (
  <div className='grid md:grid-cols-4 gap-8 text-2xl'>
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center align-middle" title="Amil">
      <AmilSvg />
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center align-middle" title="Unimed">
      <UnimedSvg />
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center align-middle" title="Porto Seguro">
      <PortoSvg />
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center align-middle text-3xl" title="Golden Cross">
      <GoldenSvg />
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center align-middle text-md">
      ...entre outras!
    </div>
  </div>
  )
}

export default Companies;
