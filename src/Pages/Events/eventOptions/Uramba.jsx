import { CardEvents1 } from "../../../Components/Card/Card";
import { useNavigate } from "react-router-dom";

function Uramba() {
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
            "Uramba",
            "Encuentro Estudiantil",
            "Únete a nosotros en un fascinante evento que celebra la riqueza y diversidad de las distintas etnias que coexisten en nuestra comunidad. Este vibrante encuentro está diseñado para destacar las expresiones culturales únicas de diversos grupos étnicos, ofreciendo a los asistentes una experiencia enriquecedora y educativa.",
            "",
            "Lunes, 13 de Noviembre 2023",
            "Universidad Icesi, 404 M",
            "Hora: 5:00 P.M. - 6:30 P.M.",
            "Grupo estudiantil Uramba"
          );
        }}
      >
        <CardEvents1
          fondo={"/assets/images/cardEvent1.png"}
          minititle={"Sesión"}
          title={"Encuentro Estudiantil"}
          fecha={"13 Nov"}
          ubicacion={"Universidad Icesi, 404 M "}
          hora={"5:00 P.M. - 6:30 P.M."}
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
            "Uramba",
            "Sesión de cierre",
            "Únete a nosotros en un fascinante evento que celebra la riqueza y diversidad de las distintas etnias que coexisten en nuestra comunidad. Este vibrante encuentro está diseñado para destacar las expresiones culturales únicas de diversos grupos étnicos, ofreciendo a los asistentes una experiencia enriquecedora y educativa.",
            "",
            "Miércoles, 20 de Diciembre 2023",
            "Universidad Icesi, 404 M",
            "Hora: 5:00 P.M. - 6:30 P.M.",
            "Grupo estudiantil Uramba"
          );
        }}
      >
        <CardEvents1
          fondo={"/assets/images/cardEvent1.png"}
          minititle={"Presentación"}
          title={"Sesión de cierre"}
          fecha={"20 Dic"}
          ubicacion={"Universidad Icesi, 404 M "}
          hora={"5:00 P.M. - 6:30 P.M."}
        />
      </span>
    </>
  );
}

export default Uramba;
