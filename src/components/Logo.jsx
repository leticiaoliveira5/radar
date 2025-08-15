import R from '../icons/R';
import A from '../icons/A';
import D from '../icons/D'

const Logo = () => {
  return(
    <div className='inline-flex flex-row items-center align-middle'>
      <R style={{marginRight: '-0.15em', zIndex: 97, fill: "#035682" }} />
      <A style={{marginRight: '-0.15em', marginLeft: '-0.15em', zIndex: 98, fill: "#035682" }} />
      <D style={{marginRight: '-0.15em', marginLeft: '-0.15em', zIndex: 99, fill: "#fb6a02" }} />
      <A style={{marginRight: '-0.15em', marginLeft: '-0.15em', zIndex: 98, fill: "#035682" }} />
      <R style={{marginLeft: '-0.15em', zIndex: 97, fill: "#035682" }} />
    </div>
  )
}

export default Logo;
