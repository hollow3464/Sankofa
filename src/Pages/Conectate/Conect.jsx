import { CardConect } from '../../Components/Card/Card'
import ConectLog from '../../Components/conectLog/ConectLog'
import './Conect.css'

function Conect() {
  return (
    <section className='conect-container'>
        <div className='conect-log'>
            <ConectLog text={'Conéctate con Icesi'} colorbg={'#5427AE'}/>
            <p>La universidad ICESI, reconoce la <b>importancia de destacar a grupos específicos que a menudo enfrentan desafíos particulares en nuestra sociedad.</b> </p>
        </div>
        <div className='conect-cards'>
            <CardConect 
                title={'Política de igualdad de Trato'} 
                text={'La Política de Igualdad de Trato tiene como objetivo brindar una atención especial  y apoyo dentro de la población institucional como por ejemplo a nosotras/os, como jóvenes afrodescendientes, raizales y/o palenqueras/os.'}
            />
        </div>
        <img src='/assets/images/paper_conect.png' alt='paper' className='paper-conect' />
    </section>
  )
}

export default Conect