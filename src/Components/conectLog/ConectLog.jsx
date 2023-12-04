/* eslint-disable react/prop-types */
import './conectLog.css'

function ConectLog({text, colorbg, colortext}) {
  return (
    <div className="conectLog-container">
        <div className='conectLog-images'>
            <img src='/assets/images/torreEvents.png' alt='building' className='building-conectLog' />
            <img src='/assets/images/persons_log.png' alt='persons' className='persons-conectLog' />
        </div>
        <div className='conect-rectangle' style={{backgroundColor: `${colorbg}`, color: `${colortext}`}}>
            <h1 style={{fontWeight: 600}}>{text}</h1>
        </div>
    </div>
  )
}

export default ConectLog