import { CardEvents1 } from "../../../Components/Card/Card";
import { useNavigate } from "react-router-dom";

function SemilleroCeaf() {
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
            "Semillero CEAF",
            "Transatlánticidad",
            "Únete a nosotros en un fascinante evento que celebra la riqueza y diversidad de las distintas etnias que coexisten en nuestra comunidad. Este vibrante encuentro está diseñado para destacar las expresiones culturales únicas de diversos grupos étnicos, ofreciendo a los asistentes una experiencia enriquecedora y educativa.",
            "",
            "Martes, 14 de Noviembre 2023",
            "Universidad Icesi, 102 C",
            "Hora: 5:00 P.M. - 6:30 P.M.",
            "Semillero CEAF"
          );
        }}
      >
        <CardEvents1
          fondo={"/assets/images/cardEvent1.png"}
          minititle={"Última sesión"}
          title={"Transatlánticidad"}
          fecha={"14 Nov"}
          ubicacion={"Universidad Icesi, 102 C"}
          hora={"5:00 P.M. - 6:30 P.M."}
        />
      </span>

      <span
        onClick={() => {
          enviarParametros(
            "Semillero CEAF",
            "Religiosidad de Matriz Africana",
            "Únete a nosotros en un fascinante evento que celebra la riqueza y diversidad de las distintas etnias que coexisten en nuestra comunidad. Este vibrante encuentro está diseñado para destacar las expresiones culturales únicas de diversos grupos étnicos, ofreciendo a los asistentes una experiencia enriquecedora y educativa.",
            "",
            "Domingo, 10 de Diciembre 2023",
            "Universidad Icesi, 106 G",
            "Hora: 5:00 P.M. - 7:30 P.M.",
            "Semillero CEAF"
          );
        }}
      >
        <CardEvents1
          fondo={"/assets/images/cardEvent2.png"}
          minititle={"Tercer sesión"}
          title={"Religiosidad de Matriz Africana"}
          fecha={"10 Dic"}
          ubicacion={"Universidad Icesi, 106 G"}
          hora={"5:00 P.M. - 7:30 P.M."}
        />
      </span>

      <span
        onClick={() => {
          enviarParametros(
            "Semillero CEAF",
            "Quilombos en la Ámericas",
            "Únete a nosotros en un fascinante evento que celebra la riqueza y diversidad de las distintas etnias que coexisten en nuestra comunidad. Este vibrante encuentro está diseñado para destacar las expresiones culturales únicas de diversos grupos étnicos, ofreciendo a los asistentes una experiencia enriquecedora y educativa.",
            "",
            "Viernes, 15 de Diciembre 2023",
            "Universidad Icesi, 102 C",
            "Hora: 5:00 P.M. - 7:30 P.M.",
            "Semillero CEAF"
          );
        }}
      >
        <CardEvents1
          fondo={"/assets/images/cardEvent2.png"}
          minititle={"Segunda sesión"}
          title={"Quilombos en la Ámericas"}
          fecha={"15 Dic"}
          ubicacion={"Universidad Icesi, 102 C"}
          hora={"5:00 P.M. - 7:30 P.M."}
        />
      </span>
    </>
  );
}

export default SemilleroCeaf;
