import { CardEvents1 } from "../../../Components/Card/Card";
import { useNavigate } from "react-router-dom";

function ParaTi() {
  const navigate = useNavigate();
  const enviarParametros = (
    scheduleType,
    title,
    text1,
    text2,
    fecha,
    lugar,
    hora,
    titleSemillero
  ) => {
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

    navigate("/home/Events/Schedule");
  };
  return (
    <>
      <span
        onClick={() => {
          enviarParametros(
            "CEAF",
            "Cumpleaños CEAF",
            "Únete a nosotros en un fascinante evento que celebra la riqueza y diversidad de las distintas etnias que coexisten en nuestra comunidad. Este vibrante encuentro está diseñado para destacar las expresiones culturales únicas de diversos grupos étnicos, ofreciendo a los asistentes una experiencia enriquecedora y educativa.",
            "",
            "Viernes, 10 de Noviembre 2023",
            "Universidad Icesi, 206 C",
            "Hora: 1:00 P.M. - 7:30 P.M.",
            "Centro de Estudios Afrodiaspóricos"
          );
        }}
      >
        <CardEvents1
          fondo={"/assets/images/cardEvent2.png"}
          minititle={"Celebración"}
          title={"Cumpleaños CEAF"}
          fecha={"10 Nov"}
          ubicacion={"Universidad Icesi, 206 C"}
          hora={"1:00 P.M. - 7:30 P.M."}
          registrado={"si"}
        />
      </span>
      <span
        onClick={() => {
          enviarParametros(
            "Uramba",
            "Sesión 1",
            "Únete a nosotros en un fascinante evento que celebra la riqueza y diversidad de las distintas etnias que coexisten en nuestra comunidad. Este vibrante encuentro está diseñado para destacar las expresiones culturales únicas de diversos grupos étnicos, ofreciendo a los asistentes una experiencia enriquecedora y educativa.",
            "",
            "Viernes, 17 de Noviembre 2023",
            "Universidad Icesi, 102 G",
            "Hora: 1:00 P.M. - 7:30 P.M.",
            "Grupo estudiantil Uramba"
          );
        }}
      >
        <CardEvents1
          fondo={"/assets/images/cardEvent1.png"}
          minititle={"Webinar"}
          title={"Sesión 1"}
          fecha={"17 Nov"}
          ubicacion={"Universidad Icesi, 102 G"}
          hora={"1:00 P.M. - 7:30 P.M."}
        />
      </span>
      <span
        onClick={() => {
          enviarParametros(
            "Universidad Icesi",
            "Día de la diversidad",
            "Únete a nosotros en un fascinante evento que celebra la riqueza y diversidad de las distintas etnias que coexisten en nuestra comunidad. Este vibrante encuentro está diseñado para destacar las expresiones culturales únicas de diversos grupos étnicos, ofreciendo a los asistentes una experiencia enriquecedora y educativa.",
            "",
            "Miércoles, 14 de Noviembre 2023",
            "Auditorio Manuelita, Icesi",
            "Hora: 1:00 P.M. - 7:30 P.M.",
            "Universidad Icesi"
          );
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
      <span
        onClick={() => {
          enviarParametros(
            "CEAF",
            "25 de Julio",
            "Únete a nosotros en un fascinante evento que celebra la riqueza y diversidad de las distintas etnias que coexisten en nuestra comunidad. Este vibrante encuentro está diseñado para destacar las expresiones culturales únicas de diversos grupos étnicos, ofreciendo a los asistentes una experiencia enriquecedora y educativa.",
            "",
            "Viernes, 01 de Diciembre 2023",
            "Universidad del Valle",
            "Hora: 8:00 A.M. - 10:30 P.M.",
            "Centro de Estudios Afrodiaspóricos"
          );
        }}
      >
        <CardEvents1
          fondo={"/assets/images/cardEvent1.png"}
          minititle={"Conversatorio"}
          title={"25 de Julio"}
          fecha={"01 Dic"}
          ubicacion={"Universidad del Valle"}
          hora={"8:00 A.M. - 10:30 P.M."}
        />
      </span>
    </>
  );
}

export default ParaTi;
