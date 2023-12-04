import { FaArrowRightLong } from "react-icons/fa6";
import {
  CardLearnImg,
  CardLearnImg2,
  CardLearnLeftImg,
} from "../../Components/Card/Card";
import { Link } from "react-router-dom";

export default function Learn() {
  return (
    <div className="learn-container">
      <h5
        style={{
          backgroundColor: "#fff",
          color: "#000",
          padding: "0.2rem 1.5rem",
          fontWeight: "700",
        }}
      >
        Aprende
      </h5>
      <CardLearnLeftImg
        img={"/assets/images/papersAprende.png"}
        title={"¿Te ha pasado?"}
        text={
          "Identifica y brindar apoyo a personas que han experimentado discriminación racial."
        }
        left={"0.8rem"}
        linkTo={"/home/MeHaPasado"}
      />
      <CardLearnLeftImg
        img={"/assets/images/icebergAprende.png"}
        title={"El Iceberg del racismo"}
        text={
          "Ser consciente de las sutiles formas de discriminación que perpetúan la violencia racial."
        }
        right={"1rem"}
        linkTo={"/home/Iceberg/onboard/1"}
      />
      <CardLearnLeftImg
        img={"/assets/images/libroAprend.png"}
        title={"Libros de la diáspora Afrícana"}
        text={"Encuentra lecturas para enriquecer tue experiencia "}
        left={"1rem"}
        linkTo={"/home/AprendeLibros"}
      />

      <div className="learn-container-row1">
        <h5 style={{ margin: "0rem" }}>Escuchando Voces</h5>
        <Link to={"/home/Escucha-Voces"}>
          <FaArrowRightLong
            style={{
              textDecoration: "none",
              width: "3rem",
              height: "1.5rem",
              color: "#fff",
            }}
          />
        </Link>
      </div>
      <p style={{ color: "#fff", fontSize: "0.8rem" }}>
        Contenido que inspira y fomenta un cambios significativos en la lucha
        contra el racismo
      </p>
      <div className="learn-container-row2">
        <CardLearnImg2
          title={"Cuestiona tus prejuicios"}
          img={"/assets/images/persona3Aprende.png"}
          backgroundColor={"#5427AE"}
          color={"#fff"}
          linkTo={"/Escuchas-Voces/1"}
        />
        <CardLearnImg2
          title={"Tips para Identificar microagresiones"}
          img={"/assets/images/persona2Aprend.png"}
          backgroundColor={"#5427AE"}
          color={"#fff"}
          linkTo={"/Escuchas-Voces/2"}
        />
      </div>
      <CardLearnLeftImg
        img={"/assets/images/lunaAprende.png"}
        title={"Redes  para aprender"}
        text={
          "Utiliza, las plataformas existentes para aprender, conectar y empoderate"
        }
        top={"0.8rem"}
        right={"0.2rem"}
        linkTo={"/home/Instagram"}
      />
    </div>
  );
}
