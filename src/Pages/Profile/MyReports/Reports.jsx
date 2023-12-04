import { CardReport } from '../../../Components/Card/Card'
import ReportLog from '../../../Components/reportLog/ReportLog'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import './report.css'

function Reports() {
  return (
    <section className='reports-container'>
      <Link
        to="/Home/Profile"
        className="link-card-events3"
        style={{ zIndex: "5000", margin: "0" }}
      >
        <FaArrowLeft className="icon-back-banner" style={{ top: "-2rem" }} />
      </Link>
        <ReportLog />
        <button className='btn-reports'>Crear nuevo reporte <span>+</span></button>
        <div className='report-content'>
            <CardReport 
                numReporte={'1250698'}
                fecha={'15 de octubre 2023'}
                estado={'Tu caso esta siendo valorado por el comité de Ruta de igualdad.'}
            />
            <CardReport 
                numReporte={'1254650'}
                fecha={'10 de Julio 2023'}
                estado={'Caso finalizado.'}
            />
        </div>
    </section>
  )
}

export default Reports