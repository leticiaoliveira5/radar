import AmilSvg from '../icons/AmilSvg';
import UnimedSvg from '../icons/UnimedSvg';
import PortoSvg from '../icons/PortoSvg';
import GoldenSvg from '../icons/GoldenSvg';
import BradescoSvg from '../icons/BradescoSvg';
import SulamericaSvg from '../icons/SulamericaSvg';
import NotredameSvg from '../icons/NotredameSvg';

const Item = ({icon, title, klass}) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-8 flex flex-col items-center justify-center align-middle text-3xl ${klass}`} title={title}>
      <div><a href="#contato">{icon}</a></div>
    </div>
  )
};

const Companies = () => {
return (
  <div className='grid md:grid-cols-4 gap-8 text-2xl'>
    <Item icon={<AmilSvg />} title="Amil" />
    <Item icon={<UnimedSvg />} title="Unimed" klass="text-4xl" />
    <Item icon={<PortoSvg />} title="Porto Seguro" klass="text-xl"/>
    <Item icon={<GoldenSvg />} title="Golden Cross" />
    <Item icon={<SulamericaSvg />} title="Sulamérica" />
    <Item icon={<BradescoSvg />} title="Bradesco" klass="text-4xl" />
    <Item icon={<NotredameSvg />} title="Notredame Intermédica" klass="text-5xl" />
    <Item icon={"...entre outras!"} klass="text-xl" />
  </div>
  )
}

export default Companies;
