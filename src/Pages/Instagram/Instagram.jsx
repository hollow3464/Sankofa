import { Link } from "react-router-dom";
import "./instagram.css";
import { FaArrowLeft } from "react-icons/fa";
import { CardLearntImgInsta } from "../../Components/Card/Card";

export default function Instagram() {
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
          src="/assets/images/imgInstagram.png"
          alt=""
          style={{ height: "12rem", marginRight: "2rem" }}
        />
        <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
          Utiliza, las plataformas existentes para aprender, conectar y
          empoderate
        </p>
      </div>
      <div style={{ padding: "1.5rem" }}>
        <CardLearntImgInsta
          img={"/assets/images/mask5.png"}
          title={"Afrocolectivx"}
          text={
            "Medio de comunicación y deconstrucción afrofeminista, antirracista y panafricanista."
          }
          href={"https://www.instagram.com/afrocolectivx/"}
        />
      </div>
      <div style={{ padding: "1.5rem", paddingTop: "0" }}>
        <CardLearntImgInsta
          img={"/assets/images/mask6.png"}
          title={"Pacifico Task Force"}
          text={
            "Potencian el trabajo de las organizaciones territoriales para impulsar la transformación de realidades en el Pacífico"
          }
          href={"https://www.instagram.com/pacificotaskforce/"}
        />
      </div>
      <div style={{ padding: "1.5rem", paddingTop: "0" }}>
        <CardLearntImgInsta
          img={"/assets/images/mask7.png"}
          title={"Redprietas"}
          text={
            "Medio de comunicación y deconstrucción afrofeminista, antirracista y panafricanista"
          }
          href={"https://www.instagram.com/redprietas/"}
        />
      </div>
    </>
  );
}
