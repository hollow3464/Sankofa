import { Link } from "react-router-dom";
import { MdAccessTime } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "./hearVoices.css";

export default function HearVoices1() {
  return (
    <>
      <div className="hear-voices1-container">
        <Link
          to="/home/Escucha-Voces"
          className="link-card-events3"
          style={{ zIndex: "5000", margin: "0" }}
        >
          <FaArrowLeft className="icon-back-banner" style={{ top: "2.2rem" }} />
        </Link>
        <div className="hear-voices1-img">
          <video className="img-escuchavoces-1" preload="auto" autoPlay loop>
            <source src="../../../src/assets/video1.mp4" />
          </video>
        </div>
        <div className="hear-voices1-colum">
          <div className="hear-voices1-row">
            <FaEye style={{ fontSize: "1.3rem", paddingBottom: "0.2rem" }} />
            <span>20 vistas</span>
          </div>
          <div className="hear-voices1-row" style={{ gap: "0.2rem" }}>
            <MdAccessTime style={{ fontSize: "1.2rem" }} />
            <span>01:30</span>
          </div>
        </div>
        <div className="hear-voices1-content-text">
          <h2 style={{ fontSize: "1.5rem" }}>
            Tips para Identificar micro agresiones
          </h2>
          <p style={{ fontSize: "0.8rem" }}>
            Todo lo que necesitas saber sobre las micro agresiones junto a
            @Elena_Ulabares. Docente del CEAF.
          </p>
        </div>
      </div>
    </>
  );
}
