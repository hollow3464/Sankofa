/* eslint-disable react/prop-types */
import { CardSemillero } from './Card'
import {IoCloseSharp} from 'react-icons/io5'
import './card.css'
import { Link, useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export function GigaCard({ title, minititle, text1, text2, fecha, lugar, hora, colorbg, colortext, handleNext }) {
  return (
    <>
      <div
        className="jumboCard-container"
        style={{ backgroundColor: `${colorbg}`, color: `${colortext}` }}
      >
        <h5>{minititle}</h5>
        <h2>{title}</h2>
        <p>{text1}</p>
        <p>{text2}</p>
        <article className='jumboCard-content'>
            <div className='calendar-container'>
                <img src='/assets/images/calendar.png' alt='calendar' />
                <div className='divider-vertical'></div>
                <article className='calendar-content'>
                    <i><b>{fecha}</b></i>
                    <i>{lugar}</i>
                    <i><b>{hora}</b></i>
                </article>
            </div>
            <div className='agendarme-content'>
                <CardSemillero />
                <button 
                  className='btn-outlined' 
                  onClick={handleNext}
                  style={{width:'100%'}}
                >
                  Agendarme
                </button>
            </div>
        </article>
      </div>
    </>
    )
}

export function GigaCard2({title, text1, text2, handleNext}) {
  const navigate = useNavigate();
  const handlePush = () => {
    handleNext();
    navigate('/home/Events/Ready')
  }
  return (
    <>
      <section 
        className='centralCard-container'
      >
        <div className='centralCard-content'>
          <IoCloseSharp className='btn-close-event' onClick={handlePush}/>
          <h5>{title}</h5>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </section>
    </>
  )
}

export function GigaCard3({ title, minititle, fecha, lugar, hora, colorbg, colortext }) {
  return (
    <>
      <div
        className="jumboCard-container"
        style={{ backgroundColor: `${colorbg}`, color: `${colortext}` }}
      >
        <h5>{minititle}</h5>
        <h2>{title}</h2>
        <article className='jumboCard-content'>
            <div className='calendar-container'>
                <img src='/assets/images/calendar.png' alt='calendar' />
                <div className='divider-vertical'></div>
                <article className='calendar-content'>
                    <i><b>{fecha}</b></i>
                    <i>{lugar}</i>
                    <i><b>{hora}</b></i>
                </article>
            </div>
            <div className='agendarme-content'>
                <CardSemillero />
            </div>
        </article>
        <div className='jumboCard-irEventos'>
          <h3 style={{fontWeight:600}}>Evento <span style={{backgroundColor:'black', color:'white', paddingRight:'2rem'}}>registrado exitosamente</span></h3>
          <Link to={'/home/Events'}>Ir a mis eventos</Link>
        </div>
      </div>
    </>
  )
}
