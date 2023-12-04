import "./detailEvents.css";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export function DetailEvents() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Link
        to="/Home/MyEvents"
        className="link-card-events3"
        style={{ zIndex: "5000", margin: "0" }}
      >
        <FaArrowLeft className="icon-back-banner" style={{ top: "-2rem" }} />
      </Link>
      <div className="detail-events-container">
        <article className="my-event-logs">
          <img
            src="/assets/images/eventosLog1.png"
            alt=""
            style={{
              height: "14.5rem",
              width: "auto",
              marginRight: "3rem",
            }}
          />
        </article>
        {EventsNumbre(id)}
      </div>
      <div>
        <img
          style={{ width: "160rem", height: "40rem", zIndex: "4" }}
          src="/assets/images/paper2.png"
          alt="paper2"
          className="paper-perfil1"
        />
      </div>
    </>
  );
}

function EventsNumbre(id) {
  switch (id) {
    case "1":
      return (
        <div className="section-two-container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "#5427AE",
              color: "#fff",
              width: "8rem",
              borderRadius: "2rem",
              marginBottom: "1rem",
            }}
          >
            CEAF
          </div>
          <h2>
            <b>Cumpleaños CEAF</b>
          </h2>
          <p style={{ marginTop: "1.5rem" }}>
            Únete a nosotros en un emocionante Encunetro Global en Celebración
            del Día de la Diáspora.
            <b>donde celebraremos la diversidad y la riqueza cultural</b> de las
            comunidades dispersas por todo el mundo.
          </p>
          <div className="footer-detail-events-container">
            <img
              src="..//assets/images/calendario.png"
              alt="none"
              style={{ height: "5rem" }}
            />
            <p style={{ fontSize: "0.9rem" }}>
              <b>Miércoles, 21 de octubre del 2023</b>
              <br />
              Auditoria Manuelita, Icesi
              <br />
              Hora: <b>2:00 P.M a 5:00 P.M</b>
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                textDecoration: "underline",
                border: "none",
              }}
            >
              Cancelar Asistencia
            </button>
          </div>
        </div>
      );
    case "2":
      return (
        <div className="section-two-container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "#5427AE",
              color: "#fff",
              width: "8rem",
              borderRadius: "2rem",
              marginBottom: "1rem",
            }}
          >
            Uramba
          </div>
          <h2>
            <b>Encuentro Estudiantil</b>
          </h2>
          <p style={{ marginTop: "1.5rem" }}>
            Prepárate para un viaje emocionante a través del tiempo y el espacio
            explorando nuestras raíces en nuestro próximo encuentro estudiantil
            que busca fomentar el entendimiento, la apreciación y la conexión
            entre diversas culturas presentes en nuestra comunidad estudiantil.
          </p>
          <div className="footer-detail-events-container">
            <img
              src="..//assets/images/calendario.png"
              alt="none"
              style={{ height: "5rem" }}
            />
            <p style={{ fontSize: "0.9rem" }}>
              <b>Martes, 13 de Noviembre 2023</b>
              <br />
              Universidad Icesi, salón 103 D
              <br />
              Hora: <b>5:00 P.M. - 6:30 P.M.</b>
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                textDecoration: "underline",
                border: "none",
                color: "#000",
              }}
            >
              Cancelar Asistencia
            </button>
          </div>
        </div>
      );
    case "3":
      return (
        <div className="section-two-container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "#5427AE",
              color: "#fff",
              width: "8rem",
              borderRadius: "2rem",
              marginBottom: "1rem",
            }}
          >
            CEAF
          </div>
          <h2>
            <b>Cumpleaños CEAF</b>
          </h2>
          <p style={{ marginTop: "1.5rem" }}>
            Nos complace invitarte a un evento educativo e inspirador diseñado
            para ayudar a los estudiantes o alcanzar su maximo potencial
            academico y personal.
          </p>
          <div className="footer-detail-events-container">
            <img
              src="..//assets/images/calendario.png"
              alt="none"
              style={{ height: "5rem" }}
            />
            <p style={{ fontSize: "0.9rem" }}>
              <b>Jueves, 31 de octubre del 2023</b>
              <br />
              Salon 102 C, Icesi
              <br />
              Hora: <b>2:00 P.M a 5:00 P.M</b>
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                textDecoration: "underline",
                border: "none",
                color: "#fff",
              }}
            >
              Cancelar Asistencia
            </button>
          </div>
        </div>
      );
    default:
      return;
  }
}
