import R from '../icons/R';
import A from '../icons/A';
import D from '../icons/D'

const Logo = ({color}) => {
  const rColor = color || "#004e79";
  const aColor = color || "#035682";
  const dColor = color || "#fb6a02";

  return(
    <div className='inline-flex flex-row items-center align-middle'>
      <R style={{marginRight: '-0.15em', zIndex: 97, fill: rColor }} />
      <A style={{marginRight: '-0.15em', marginLeft: '-0.15em', zIndex: 98, fill: aColor }} />
      <D style={{marginRight: '-0.15em', marginLeft: '-0.15em', zIndex: 99, fill: dColor }} />
      <A style={{marginRight: '-0.15em', marginLeft: '-0.15em', zIndex: 98, fill: aColor }} />
      <R style={{marginLeft: '-0.15em', zIndex: 97, fill: rColor }} />
    </div>
  )
}

export default Logo;
