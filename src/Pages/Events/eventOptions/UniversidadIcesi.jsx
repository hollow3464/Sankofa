import { useNavigate } from "react-router-dom";
import { CardEvents1 } from "../../../Components/Card/Card";

function UniversidadIcesi() {
  const navigate = useNavigate()
  const enviarParametros = ( scheduleType, title, text1, text2, fecha, lugar, hora, titleSemillero) => {
    const datos = {
      scheduleType: `${scheduleType}`,
      title: `${title}`,
      text1: `${text1}`,
      text2: `${text2}`,
      fecha: `${fecha}`,
      lugar: `${lugar}`,
      hora: `${hora}`,
      titleSemillero: `${titleSemillero}`,
    };

    // Guardar en localStorage
    localStorage.setItem("datosEvento", JSON.stringify(datos));

    navigate('/home/Events/Schedule')
  };
  return (
    <>
      <span
        onClick={() => {
          enviarParametros(
            'Universidad Icesi'
            , 'Día de la diversidad'
            , 'Únete a nosotros en un fascinante evento que celebra la riqueza y diversidad de las distintas etnias que coexisten en nuestra comunidad. Este vibrante encuentro está diseñado para destacar las expresiones culturales únicas de diversos grupos étnicos, ofreciendo a los asistentes una experiencia enriquecedora y educativa.'
            , ''
            , 'Miércoles, 14 de Noviembre 2023'
            , 'Auditorio Manuelita, Icesi'
            , 'Hora: 1:00 P.M. - 7:30 P.M.'
            , 'Universidad Icesi');
        }}
      >
        <CardEvents1
          fondo={"/assets/images/cardEvent2.png"}
          minititle={"Webinar"}
          title={"Día de la diversidad"}
          fecha={"25 Nov"}
          ubicacion={"Zoom, remoto"}
          hora={"5:00 P.M. - 6:30 P.M."}
        />
      </span>
    </>
  );
}

export default UniversidadIcesi;
