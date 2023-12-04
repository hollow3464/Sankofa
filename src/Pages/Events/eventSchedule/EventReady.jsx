import { GigaCard3 } from '../../../Components/Card/GigaCard'
import EventsLog from '../../../Components/eventsLog/EventsLog'
import './eventSchedule.css'

function EventReady() {
  return (
    <>
        <section className='eventSchedule-container'>
        <div className='eventSchedule-content' >
            <EventsLog text={'Eventos'} colorbg={'#D24040'}/>
            <GigaCard3
                title={'Encuentro de Afrobrasileños'}  
                minititle={'Sesión 1'}
                fecha={'Miércoles, 21 de octubre 2023'}
                lugar={'Auditorio Manuelita, Icesi'}
                hora={'Hora: 2:00 P.M a 5:00 P.M'}
                colorbg={'#D24040'}
            />
        </div>
        <img src='/assets/images/paper_events_copy.png' alt='paper' className='paper-events'/>
    </section>
    </>
  )
}

export default EventReady