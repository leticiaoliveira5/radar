import AmilSvg from '../icons/AmilSvg';
import UnimedSvg from '../icons/UnimedSvg';
import PortoSvg from '../icons/PortoSvg';
import GoldenSvg from '../icons/GoldenSvg';

const Item = ({icon, title, klass}) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-8 flex flex-col items-center align-middle text-3xl ${klass}`} title={title}>
      <a href="#contato">{icon}</a>
    </div>
  )
};

const Companies = () => {
return (
  <div className='grid md:grid-cols-4 gap-8 text-2xl'>
    <Item icon={<AmilSvg />} title="Amil" />
    <Item icon={<UnimedSvg />} title="Unimed" />
    <Item icon={<PortoSvg />} title="Porto Seguro" />
    <Item icon={<GoldenSvg />} title="Golden Cross" />
    <Item icon={"Bradesco"} title="Bradesco" />
    <Item icon={"Sulamérica"} title="Sulamérica" />
    <Item icon={"Leve"} title="Leve" />
    <Item icon={"...entre outras!"} klass="text-xl" />
  </div>
  )
}

export default Companies;
