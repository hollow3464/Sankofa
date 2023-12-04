import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./notifications.css";

export function Notifications({ handleNotifications, show }) {
  return (
    <>
      <div
        className={`${
          show ? "notifications-container" : "notifications-container-off"
        }`}
      >
        <AiOutlineArrowLeft
          className="closebtn"
          onClick={() => handleNotifications()}
        />
        <img
          src="/assets/images/notificaciones.png"
          alt="none"
          style={{ height: "8rem", transition: "0.5s" }}
        />
        <div
          className="notifications-containers-nav"
          style={{ marginTop: "2rem" }}
        >
          <h5 style={{ color: "#000" }}>
            <b>Reporte Revisado</b>
          </h5>
          <p style={{ color: "grey", fontSize: "0.8rem" }}>No.1250698</p>
          <p style={{ color: "#000", fontSize: "0.8rem" }}>
            <b>Fecha:</b> 15 Octubre 2023
          </p>
          <p style={{ color: "#000", fontSize: "0.8rem" }}>
            <b>Estado:</b> Tu reporte fue revisado por el comite de ruta de
            igualdad de trato
          </p>
          <a href="">ver reporte</a>
        </div>

        <div className="notifications-containers-nav">
          <h5 style={{ color: "#000" }}>
            <b>Recordatorio de Evento</b>
          </h5>
          <p style={{ color: "#000", fontSize: "0.8rem", maxHeight: "12rem" }}>
            Este es un recordatorio para la
            <b> primera sesion </b>
            del semillero de Estudios Afrodiaspórticos, programada para el
            <b> miercoles 23 de septiembre a las 5:30 P.M.</b>
          </p>
        </div>
      </div>
    </>
  );
}
