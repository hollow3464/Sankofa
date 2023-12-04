import { useState } from 'react'
import { GigaCard, GigaCard2 } from '../../../Components/Card/GigaCard'
import EventsLog from '../../../Components/eventsLog/EventsLog'
import './eventSchedule.css'

function EventSchedule() {
  const [next, setNext] = useState(false)
  const handleNext = () =>  {
    setNext(!next)
  }
  return (
    <>
      <section className='eventSchedule-container' style={next ? {filter: 'blur(4px)'}: null }>
        <div className='eventSchedule-content'>
            <EventsLog text={'Eventos'} colorbg={'#D24040'}/>
            <GigaCard
                title={'Encuentro de Afrobrasileños'}  
                minititle={'Sesión 1'}
                text1={'¡Únete a nosotros en una emocionante próxima sesión que celebra la riqueza del arte y la cultura de las comunidades afrodescendientes e indígenas!'}
                text2={'En esta sesión, exploraremos el asombroso mundo del arte a través de los ojos de artistas talentosos que representan las vibrantes culturas afrodescendientes e indígenas. Sumérgete en un viaje fascinante lleno de colores, formas y narrativas que capturan la esencia de estas comunidades ricas en tradición y creatividad.'}
                fecha={'Miércoles, 21 de octubre 2023'}
                lugar={'Auditorio Manuelita, Icesi'}
                hora={'Hora: 2:00 P.M a 5:00 P.M'}
                colorbg={'#D24040'}
                handleNext={handleNext}
            />
        </div>
        <img src='/assets/images/paper_events_copy.png' alt='paper' className='paper-events'/>
    </section>
    {
          next ?
          (<GigaCard2 
            title={'El Semillero de Estudios Afrodiaspóricos'} 
            text1={'Es un espacio creado y coordinado por el CEAF de la Universidad Icesi, que tiene como objetivo identificar y aportar a las principales líneas de investigación que constituyen el campo de los estudios afrocolombianos”. (ICESI, 2021)'} 
            text2={'“La metodología de trabajo de este espacio académico está orientada hacia un aprendizaje dinámico, autónomo e interactivo con los y las estudiantes, donde se define un tema de investigación y posteriormente es discutido por todos y todas, con la guía de un o una ponente principal”. (ICESI, 2021)'} 
            handleNext={handleNext}
          />)
          : null
      }
    </>
  )
}

export default EventSchedule