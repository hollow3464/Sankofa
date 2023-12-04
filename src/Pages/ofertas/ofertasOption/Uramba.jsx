import { CardOfertas } from "../../../Components/Card/Card";
import { useNavigate } from "react-router-dom";

function Uramba() {
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
    </>
  );
}

export default Uramba;
