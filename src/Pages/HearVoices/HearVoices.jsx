import { Link } from "react-router-dom";
import "./hearVoices.css";
import { FaArrowLeft } from "react-icons/fa";
import { CardLearnImg2 } from "../../Components/Card/Card";

export default function HearVoices() {
  return (
    <>
      <Link
        to="/home/aprende"
        className="link-card-events3"
        style={{ zIndex: "5000", margin: "0" }}
      >
        <FaArrowLeft className="icon-back-banner" style={{ top: "-2rem" }} />
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.5rem",
          paddingTop: "0",
          gap: "1rem",
        }}
      >
        <img
          src="/assets/images/imgEscuchaVoces.png"
          alt=""
          style={{ height: "12rem", marginRight: "2rem" }}
        />
        <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
          Queremos que sepas que existen iniciativas con un impacto positivo en
          la sociedad. Estas historias pueden inspirar a a la toma medidas y
          fomentar un cambio significativo en la lucha contra el racismo.
        </p>
      </div>
      <div className="hear-voices-container">
        <CardLearnImg2
          title={"Tips para Identificar microagresiones"}
          img={"/assets/images/persona2Aprend.png"}
          backgroundColor={"#5427AE"}
          color={"#fff"}
          linkTo={"/Escuchas-Voces/1"}
        />
        <CardLearnImg2
          title={"Igualdad de oportunidades"}
          img={"/assets/images/personaVoces1.png"}
          backgroundColor={"#5427AE"}
          color={"#fff"}
        />
        <CardLearnImg2
          title={"Tips para ser un aliado antirracista"}
          img={"/assets/images/personaVoces2.png"}
          backgroundColor={"#5427AE"}
          color={"#fff"}
          linkTo={"/Escuchas-Voces/2"}
        />
        <CardLearnImg2
          title={"Cuestiona tus prejuicios"}
          img={"/assets/images/persona3Aprende.png"}
          backgroundColor={"#5427AE"}
          color={"#fff"}
        />
      </div>
    </>
  );
}
