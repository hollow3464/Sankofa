import { useParams } from "react-router-dom";
import { CardBanner1 } from "../../Components/Card/Card";
import "./home.css";

function HomeOthers() {
  const { id } = useParams();
  const id1 = id.split("=")[1];
  return (
    <>
      <div className="other-home">
        {id1 == 1 ? (
          <CardBanner1
            title={"Centro de Estudios Afrodiaspóricos -CEAF-"}
            text1={
              "Un centro que promueve la innovación, la investigación, la enseñanza y la intervención pública en aspectos relacionados con las historias, las culturas, las políticas y la producción del conocimiento de la diáspora africana. Entendiendo la diáspora como una condición, como un proceso y como un proyecto de afinidad entre grupos humanos de descendencia africana a través del mundo."
            }
            text2={
              "Un aspecto fundamental de su visión es la construcción de puentes entre instituciones para reducir las brechas que han limitado la producción de conocimiento sobre la historia y las condiciones de vida de los descendientes de africanos y africanas en las Américas y la configuración de las Américas Negras."
            }
            imagebg={"/assets/images/ceaficesi_other.png"}
            image={"/assets/images/ceaficesi_logo_grande.png"}
            routeBack={"/home"}
          />
        ) : id1 == 2 ? (
          <CardBanner1
            title={"Uramba"}
            text1={
              "Es un espacio autónomo creado inicialmente por 3 estudiantes afrodescendientes de la Universidad ICESI con el objetivo de ser una red de apoyo mutuo y espacio seguro entre ellos. "
            }
            text2={
              "Este grupo se fortalece cuando las y los estudiantes encuentran que no son los únicos con el mismo sentir; en la actualidad el grupo cuenta con 49 estudiantes de diversas carreras. En este espacio se escuchan las experiencias  de los miembros que han encontrado apoyo y amistades significativas."
            }
            imagebg={"/assets/images/uramba_grande.png"}
            image={"/assets/images/uramba_logo_grande.png"}
            routeBack={"/home"}
          />
        ) : (
          <CardBanner1
            title={"Semillero de Estudios Afrodiaspóricos"}
            text1={
              "Es un espacio creado y coordinado por el CEAF de la Universidad Icesi, que tiene como objetivo identificar y aportar a las principales líneas de investigación que constituyen el campo de los estudios afrocolombianos”. (ICESI, 2021)"
            }
            text2={
              "“La metodología de trabajo de este espacio académico está orientada hacia un aprendizaje dinámico, autónomo e interactivo con los y las estudiantes, donde se define un tema de investigación y posteriormente es discutido por todos y todas, con la guía de un o una ponente principal”. (ICESI, 2021)"
            }
            imagebg={"/assets/images/ceaficesi_grande.png"}
            image={"/assets/images/semillero_ceaf_grande.png"}
            routeBack={"/home"}
          />
        )}
      </div>
    </>
  );
}

export default HomeOthers;
