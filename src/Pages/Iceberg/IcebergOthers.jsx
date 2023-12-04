import { useParams } from "react-router-dom";
import { CardBanner2 } from "../../Components/Card/Card";

function IceBergOthers() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div className="other-home">
        {id == 1 ? (
          <CardBanner2
            text1={
              "La violencia racial es cuando alguien o un grupo es tratado de manera violenta o discriminada debido a su raza o etnia. Algunos ejemplos incluyen la esclavitud, la discriminación, la segregación, el apartheid, los pogromos y las teorías que creen en la superioridad o inferioridad racial."
            }
            text3={
              "Has experimentado acciones o comportamientos de este tipo en la universidad?"
            }
            imagebg={"/assets/images/IcebergLog1.png"}
            image={"/assets/images/Violencia racial.png"}
            routeBack={"home/iceberg"}
          />
        ) : id == 2 ? (
          <CardBanner2
            text1={
              "La xenofobia es tener miedo, hostilidad o no gustar de personas que son vistas como extranjeras o que vienen de otros países o culturas. La relación entre la xenofobia y el racismo es que ambas son formas de discriminar y prejuzgar a otros debido a diferencias, aunque se centran en cosas distintas."
            }
            text2={
              "A menudo, la xenofobia y el racismo están conectados, ya que las personas de distintas nacionalidades o etnias pueden ser víctimas de ambas discriminaciones al mismo tiempo. Tanto el racismo como la xenofobia son dañinos y pueden llevar a excluir, ser intolerantes y hasta violentar y generar prejuicios."
            }
            text3={
              "Has experimentado acciones o comportamientos de este tipo en la universidad?"
            }
            imagebg={"/assets/images/IcebergLog1.png"}
            image={"/assets/images/Xenofobia.png"}
            routeBack={"home/iceberg"}
          />
        ) : id == 3 ? (
          <CardBanner2
            text1={
              "Son actitudes o creencias negativas y estereotipadas que una persona o grupo de personas tienen hacia individuos de una raza o etnia diferente. Estos prejuicios se basan en la idea de que ciertos grupos étnicos son inherentemente superiores o inferiores, y suelen llevar a la discriminación, el trato desigual y la exclusión de las personas pertenecientes a esas razas o etnias. Los prejuicios raciales pueden manifestarse en forma de actitudes negativas, expresiones verbales ofensivas, burlas, desprecio o incluso agresión física dirigida hacia individuos de diferentes razas o etnias."
            }
            text3={
              "Has experimentado acciones o comportamientos de este tipo en la universidad?"
            }
            imagebg={"/assets/images/IcebergLog1.png"}
            image={"/assets/images/Prejuicios raciales.png"}
            routeBack={"home/iceberg"}
          />
        ) : id == 4 ? (
          <CardBanner2
            text1={
              "El racismo simbólico se refiere a la manifestación de actitudes y prejuicios racistas de manera indirecta o sutil, a través de símbolos, imágenes, representaciones culturales, discursos, estereotipos o prácticas que pueden no ser evidentes de inmediato, pero que perpetúan la discriminación y la desigualdad racial. A menudo, el racismo simbólico opera de manera subyacente y puede ser más difícil de identificar y combatir en comparación con manifestaciones más explícitas de racismo."
            }
            text3={
              "Has experimentado acciones o comportamientos de este tipo en la universidad?"
            }
            imagebg={"/assets/images/IcebergLog1.png"}
            image={"/assets/images/Racismo Simbólico.png"}
            isButton={true}
            routeBack={"home/iceberg"}
          />
        ) : id == 5 ? (
          <CardBanner2
            text1={
              "El racismo institucional se refiere a la discriminación y el prejuicio racial que está arraigado en las estructuras, políticas y prácticas de las instituciones y organizaciones, como el gobierno, la educación, la justicia, la atención médica, el empleo y otros aspectos de la sociedad. A diferencia del racismo interpersonal, que se manifiesta en las actitudes y acciones de individuos, el racismo institucional se relaciona con las disparidades sistémicas y estructurales que afectan desproporcionadamente a grupos raciales específicos."
            }
            text3={
              "Has experimentado acciones o comportamientos de este tipo en la universidad?"
            }
            imagebg={"/assets/images/IcebergLog1.png"}
            image={"/assets/images/Racismo Institucional.png"}
            routeBack={"home/iceberg"}
          />
        ) : id == 6 ? (
          <CardBanner2
            text1={
              "El racismo científico, también conocido como racismo biológico o cientificismo racial, se refiere a la práctica de utilizar ideas pseudocientíficas o teorías falsas para respaldar y justificar la discriminación racial y la jerarquía racial. En el pasado, se difundieron teorías racistas que afirmaban que diferentes razas humanas eran biológicamente superiores o inferiores entre sí. Estas teorías han sido desacreditadas en su mayoría y se consideran falsas y moralmente reprensibles en la comunidad científica y en la sociedad en general."
            }
            text3={
              "Has experimentado acciones o comportamientos de este tipo en la universidad?"
            }
            imagebg={"/assets/images/IcebergLog1.png"}
            image={"/assets/images/Racismo Científico.png"}
            routeBack={"home/iceberg"}
          />
        ) : null}
      </div>
    </>
  );
}

export default IceBergOthers;
