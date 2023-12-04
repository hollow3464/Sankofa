import { FaMicrophone } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RouteFormNew() {
  return (
    <>
      {" "}
      <Link
        to="/home/Ruta/ofertas"
        // className="link-card-events3"
        style={{
          zIndex: "10",
          textDecoration: "none",
          color: "#fff",
          fontSize: "2rem",
          marginLeft: "2rem",
        }}
      >
        <FaArrowLeft />
      </Link>
      <div className="register-form-container">
        <div className="register-form-title">
          <img src="/assets/images/activateRuta.png" alt="" className="" />
          <p style={{ fontSize: "0.8rem" }}>
            Lamentamos profundamente que hayas experimentado momentos de
            vulnerabilidad.
          </p>
          <p style={{ fontSize: "0.8rem", margin: "0", fontWeight: "800" }}>
            Estamos aquí para acompañarte y proporcionarte el apoyo necesario
            para mejorar tu experiencia universitaria.
          </p>
        </div>
        <div className="section-white">
          <div
            className="register-scroll-container"
            style={{ height: "80rem" }}
          >
            <div
              className="row-completed"
              style={{ justifyContent: "space-between" }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#000",
                  fontWeight: "700",
                }}
              >
                ¿Eres la persona afectada?
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <span style={{ fontSize: "1.2rem", color: "#000" }}>No</span>
                <div
                  className="form-check form-switch"
                  style={{ fontSize: "1.2rem" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    style={{ color: "#000" }}
                  />
                  <label
                    className="form-check-label"
                    form="flexSwitchCheckDefault"
                    style={{ color: "#000" }}
                  >
                    Si
                  </label>
                </div>
              </div>
            </div>
            <div
              className="row-completed"
              style={{ justifyContent: "space-between" }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#000",
                  fontWeight: "700",
                }}
              >
                ¿Deseas realizar la denuncia de manerá anónima?
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <span style={{ fontSize: "1.2rem", color: "#000" }}>No</span>
                <div
                  className="form-check form-switch"
                  style={{ fontSize: "1.2rem" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    style={{ color: "#000" }}
                  />
                  <label
                    className="form-check-label"
                    form="flexSwitchCheckDefault"
                    style={{ color: "#000" }}
                  >
                    Si
                  </label>
                </div>
              </div>
            </div>
            <div className="register-form-selected-input">
              <p style={{ color: "#000", fontWeight: "600" }}>
                ¿Perfil de la persona que vulneró o discriminó?
              </p>
              <select>
                <option selected>Seleciona el perfil</option>
                <option value="1">Estudiante</option>
                <option value="2">Colaborador</option>
                <option value="3">Profesor</option>
              </select>
            </div>

            <div className="register-form-selected-input">
              <p style={{ color: "#000", fontWeight: "600" }}>
                ¿Cuéntanos qué paso?
              </p>
              <div className="route-form-audio">
                <div className="route-form-audio-top">hola</div>
                <div className="route-form-audio-bottom">
                  <input
                    type="text"
                    placeholder="Escribe el reporte"
                    className="route-form-audio-input"
                  />
                  <FaMicrophone
                    style={{ fontSize: "1.5rem", color: "#54656F" }}
                  />
                </div>
              </div>
            </div>
            <Link
              to={"/home/ruta/end"}
              className="btn-comenzamos"
              style={{
                marginTop: "1rem",
                marginBottom: "5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Activar ruta
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
