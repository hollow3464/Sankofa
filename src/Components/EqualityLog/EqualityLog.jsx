/* eslint-disable react/prop-types */
import './equalityLog.css'

function EqualityLog({text, colorbg, colortext, text1, colorbg1, colortext1,}) {
  return (
    <div className="equalityLog-container">
        <div className='equalityLog-images'>
            <img src='/assets/images/torreEvents.png' alt='building' className='building-equalityLog' />
            <img src='/assets/images/persons_log.png' alt='persons' className='persons-equalityLog' />
        </div>
        <div className='equality-rectangle' style={{backgroundColor: `${colorbg}`, color: `${colortext}`}}>
            <h3 style={{fontWeight: 600}}>{text}</h3>
        </div>
        <div className='equality-polygon' style={{backgroundColor: `${colorbg1}`, color: `${colortext1}`}}>
            <h3 style={{fontWeight: 700}}>{text1}</h3>
        </div>
    </div>
  )
}

export default EqualityLog