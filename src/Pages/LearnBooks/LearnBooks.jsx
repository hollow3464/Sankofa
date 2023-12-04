import { Link } from "react-router-dom";
import { CardLearntImgAll } from "../../Components/Card/Card";
import "./learnBooks.css";
import { FaArrowLeft } from "react-icons/fa";

export default function LearnBooks() {
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
          gap: "1rem",
        }}
      >
        <img
          src="/assets/images/imgAprendeLibros.png"
          alt=""
          style={{ height: "12rem", marginRight: "2rem" }}
        />
        <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
          Explora el vasto conocimiento de autores y autoras de la diáspora y
          déjate maravillar por su sabiduría
        </p>
      </div>
      <div style={{ padding: "1.5rem" }}>
        <CardLearntImgAll
          img={"/assets/images/mask1.png"}
          title={"Título: El peligro de la historia única"}
          text={"Autora: Chimamanda Ngozi Año: 2019"}
        />
      </div>
      <div style={{ padding: "1.5rem", paddingTop: "0" }}>
        <CardLearntImgAll
          img={"/assets/images/mask2.png"}
          title={"Título: Piel negra mascaras blancas"}
          text={"Autor: Frantz Fanon Año: 1952"}
        />
      </div>
      <div style={{ padding: "1.5rem", paddingTop: "0" }}>
        <CardLearntImgAll
          img={"/assets/images/mask3.png"}
          title={"Título: Pequeño manual Antirracista"}
          text={"Autora: Djamila Ribeiro Año: 2019"}
        />
      </div>
      <div style={{ padding: "1.5rem", paddingTop: "0" }}>
        <CardLearntImgAll
          img={"/assets/images/mask4.png"}
          title={"Título: Piel negra mascaras blancas"}
          text={"Autor: Frantz Fanon Año: 1952"}
        />
      </div>
    </>
  );
}
