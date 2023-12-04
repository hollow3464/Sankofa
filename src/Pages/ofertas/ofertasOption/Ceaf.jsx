import { CardOfertas } from "../../../Components/Card/Card";
import { useNavigate } from "react-router-dom";

function Ceaf() {
  const navigate = useNavigate()
  const enviarParametros = ( imagebg, title, text1, text2, text3, text4, text5, text6, routeBack) => {
    const datos = {
      imagebg: `${imagebg}`,
      title: `${title}`,
      text1: `${text1}`,
      text2: `${text2}`,
      text3: `${text3}`,
      text4: `${text4}`,
      text5: `${text5}`,
      text6: `${text6}`,
      routeBack: `${routeBack}`
    };

    // Guardar en localStorage
    localStorage.setItem("datosEvento", JSON.stringify(datos));

    navigate('/home/ofertas/next/card')
  };
  return (
    <>
      <span
        onClick={() => {
          enviarParametros(
            '/assets/images/3rd_ofertas.png'
            , 'Becas para investigar en colección colombiana de Vanderbilt.'
            , 'Los becarios seleccionados recibirán fondos para apoyar sus proyectos de investigación, acceso privilegiado a la Colección Colombiana de Vanderbilt y la oportunidad de trabajar en un entorno académico enriquecedor.'
            , 'Esta beca es una oportunidad única para enriquecer su educación y contribuir al conocimiento en el campo de los estudios colombianos.'
            , 'Requisitos:'
            , 'Ser estudiantes actualmente matriculados en en instituciones de la ciudad de Cali en programas de licenciatura o posgrado.'
            , 'Demostrar un sólido historial académico y un compromiso con la investigación académica.'
            , 'CEAF'
            , '/home/ofertas/next');
        }}
      >
        <CardOfertas
          imagebg={"/assets/images/3rd_ofertas.png"}
          text={"CEAF"}
          title={
            "Becas para investigar en colección colombiana de Vanderbilt."
          }
        />
      </span>
      <span
        onClick={() => {
          enviarParametros(
            '/assets/images/7th_ofertas.png'
            , 'Becas para investigar en colección colombiana de Vanderbilt.'
            , 'Los becarios seleccionados recibirán fondos para apoyar sus proyectos de investigación, acceso privilegiado a la Colección Colombiana de Vanderbilt y la oportunidad de trabajar en un entorno académico enriquecedor.'
            , 'Esta beca es una oportunidad única para enriquecer su educación y contribuir al conocimiento en el campo de los estudios colombianos.'
            , 'Requisitos:'
            , 'Ser estudiantes actualmente matriculados en en instituciones de la ciudad de Cali en programas de licenciatura o posgrado.'
            , 'Demostrar un sólido historial académico y un compromiso con la investigación académica.'
            , 'CEAF'
            , '/home/ofertas/next');
        }}
      >
        <CardOfertas
          imagebg={"/assets/images/7th_ofertas.png"}
          text={"CEAF"}
          title={
            "Becas para investigar en colección colombiana de Vanderbilt."
          }
        />
      </span>
      <span
        onClick={() => {
          enviarParametros(
            '/assets/images/10th_ofertas.png'
            , 'Becas para investigar en colección colombiana de Vanderbilt.'
            , 'Los becarios seleccionados recibirán fondos para apoyar sus proyectos de investigación, acceso privilegiado a la Colección Colombiana de Vanderbilt y la oportunidad de trabajar en un entorno académico enriquecedor.'
            , 'Esta beca es una oportunidad única para enriquecer su educación y contribuir al conocimiento en el campo de los estudios colombianos.'
            , 'Requisitos:'
            , 'Ser estudiantes actualmente matriculados en en instituciones de la ciudad de Cali en programas de licenciatura o posgrado.'
            , 'Demostrar un sólido historial académico y un compromiso con la investigación académica.'
            , 'CEAF'
            , '/home/ofertas/next');
        }}
      >
        <CardOfertas
          imagebg={"/assets/images/10th_ofertas.png"}
          text={"CEAF"}
          title={
            "Becas para investigar en colección colombiana de Vanderbilt."
          }
        />
      </span>
      <span
        onClick={() => {
          enviarParametros(
            '/assets/images/3rd_ofertas.png'
            , 'Nueva convocatoria de la Beca Icesos'
            , 'La Beca Icesos, es una estrategia integral de la Universidad, articulada con las políticas de crédito educativo del estado, para facilitar el acceso, la permanencia y la graduación de estudiantes con alta capacidad intelectual, y recursos económicos limitados.'
            , 'A quienes está dirigida la Beca Icesos:'
            , 'La Beca Icesos, está dirigida para los aspirantes procedentes de cualquier municipio del país, con alto desempeño, potencial académico y con limitaciones económicas, para cursar estudios profesionales en cualquiera de nuestros programas académicos.'
            , ''
            , ''
            , 'CEAF'
            , '/home/ofertas/next');
        }}
      >
        <CardOfertas
          imagebg={"/assets/images/13th_ofertas.png"}
          text={"CEAF"}
          title={"Nueva convocatoria de la Beca Icesos."}
        />
      </span>
    </>
  );
}

export default Ceaf;
