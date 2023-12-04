import { CardOfertas } from "../../../Components/Card/Card";
import { useNavigate } from "react-router-dom";

function ParaTi() {
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
          title={"Becas para investigar en colección colombiana de Vanderbilt."}
        />
      </span>
      <span
        onClick={() => {
          enviarParametros(
            '/assets/images/4th_ofertas.png'
            , 'Buscamos estudiantes que conozcan datos de la Diáspora Africana'
            , '¿Eres un estudiante apasionado por la historia, la cultura y el legado de la Diáspora Africana? ¡Entonces esta beca es para ti!'
            , 'En nuestro compromiso de fomentar la diversidad y la comprensión cultural, estamos emocionados de ofrecer una beca especial para estudiantes que demuestren un profundo conocimiento y un interés genuino en la Diáspora Africana.'
            , 'Reconocemos que la Diáspora Africana ha tenido un impacto significativo en la historia y la sociedad global, y queremos fomentar la educación y la conciencia en torno a este tema crucial.'
            , ''
            , ''
            , 'Uramba'
            , '/home/ofertas/next');
        }}
      >
        <CardOfertas
          imagebg={"/assets/images/4th_ofertas.png"}
          text={"Uramba"}
          title={
            "Buscamos estudiantes que conozcan datos de la Diáspora Africana."
          }
        />
      </span>
      <span
        onClick={() => {
          enviarParametros(
            '/assets/images/1st_ofertas.png'
            , 'Monitoría para estudiantes de la facultad de Diseño y Humanidades'
            , 'Los becarios seleccionados recibirán fondos para apoyar sus proyectos de investigación, acceso privilegiado a la Colección Colombiana de Vanderbilt y la oportunidad de trabajar en un entorno académico enriquecedor.'
            , 'Esta beca es una oportunidad única para enriquecer su educación y contribuir al conocimiento en el campo de los estudios colombianos.'
            , 'Requisitos:'
            , 'Ser estudiantes actualmente matriculados en en instituciones de la ciudad de Cali en programas de licenciatura o posgrado.'
            , 'Demostrar un sólido historial académico y un compromiso con la investigación académica.'
            , 'Semillero CEAF'
            , '/home/ofertas/next');
        }}
      >
        <CardOfertas
          imagebg={"/assets/images/1st_ofertas.png"}
          text={"Semillero CEAF"}
          title={
            "Monitoría para estudiantes de la facultad de Diseño y Humanidades."
          }
        />
      </span>
      <span
        onClick={() => {
          enviarParametros(
            '/assets/images/6th_ofertas.png'
            , 'Nueva convocatoria de la Beca Icesos'
            , 'La Beca Icesos, es una estrategia integral de la Universidad, articulada con las políticas de crédito educativo del estado, para facilitar el acceso, la permanencia y la graduación de estudiantes con alta capacidad intelectual, y recursos económicos limitados.'
            , 'A quienes está dirigida la Beca Icesos:'
            , 'La Beca Icesos, está dirigida para los aspirantes procedentes de cualquier municipio del país, con alto desempeño, potencial académico y con limitaciones económicas, para cursar estudios profesionales en cualquiera de nuestros programas académicos.'
            , ''
            , ''
            , 'Universidad ICESI'
            , '/home/ofertas/next');
        }}
      >
        <CardOfertas
          imagebg={"/assets/images/6th_ofertas.png"}
          text={"Universidad ICESI"}
          title={"Nueva convocatoria de la Beca Icesos"}
        />
      </span>
    </>
  );
}

export default ParaTi;
