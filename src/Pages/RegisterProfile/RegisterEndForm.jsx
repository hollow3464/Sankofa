import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function RegisterEndForm() {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [universidad, setUniversidad] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [preferencia, setPreferencia] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [anio, setAnio] = useState("");
  const [vegetariano, setVegetariano] = useState(false);
  useEffect(() => {
    let datos = sessionStorage.getItem("registerOthersData");
    datos = JSON.parse(datos);
    setNombre(datos ? datos.nombre : "usuario");
    setCarrera(datos ? datos.carrera : "usuario");
    setUniversidad(datos ? datos.universidad : "usuario");
    setEmail(datos ? datos.email : "usuario");
    let datosPreferences = sessionStorage.getItem("preferences");
    datosPreferences = JSON.parse(datosPreferences);
    setPreferencia(datosPreferences ? datosPreferences.preferencia : "usuario");
    setDia(datosPreferences ? datosPreferences.dia : "usuario");
    setMes(datosPreferences ? datosPreferences.mes : "usuario");
    setAnio(datosPreferences ? datosPreferences.anio : "usuario");
    setVegetariano(datosPreferences ? datosPreferences.vegetariano : "usuario");
    setAvatar(sessionStorage.getItem("avatar"));
  }, []);
  return (
    <>
      <Link
        to="/RegisterProfile/Form"
        className="link-card-events3"
        style={{ zIndex: "5000", margin: "0" }}
      >
        <FaArrowLeft
          className="icon-back-banner"
          style={{ top: "-2rem", left: "1.5rem" }}
        />
      </Link>
      <div className="register-form-container">
        <div
          className="register-form-row"
          style={{ marginTop: "3.5rem", left: "1.5rem" }}
        >
          <div className="round-picker">
            <span
              style={{
                fontSize: "4rem",
              }}
            >
              {avatar}
            </span>
          </div>
          <h1>{nombre}</h1>
        </div>
        <div className="register-form-title">
          <h6
            style={{
              backgroundColor: "#5427AE",
              padding: "0.3rem 1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ¡Listo, tu perfil esta completo!
          </h6>
          <h6 style={{ fontSize: "0.8rem", marginTop: "1rem" }}>
            Puedes volver a modificarlo cuando quieras
          </h6>
        </div>
        <div className="section-white">
          <div className="register-scroll-container">
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <p style={{ color: "#000", fontWeight: "600" }}>
                Nombre Completo
              </p>
              <input
                style={{ height: "4rem" }}
                type="text"
                value={nombre}
                className="register-form-input"
                required
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <p style={{ color: "#000", fontWeight: "600" }}>Carrera</p>
              <input
                style={{ height: "4rem" }}
                type="text"
                value={carrera}
                className="register-form-input"
                required
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <p style={{ color: "#000", fontWeight: "600" }}>Universidad</p>
              <input
                style={{ height: "4rem" }}
                type="text"
                value={universidad}
                className="register-form-input"
                required
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <p style={{ color: "#000", fontWeight: "600" }}>
                Correo electrónico
              </p>
              <input
                style={{ height: "4rem" }}
                type="text"
                value={email}
                className="register-form-input"
                required
              />
            </div>
            <div className="register-form-selected-input">
              <p style={{ color: "#000", fontWeight: "600" }}>Género</p>
              <select>
                <option selected>Masculino</option>
                <option value="1">Femenino</option>
              </select>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <p style={{ color: "#000", fontWeight: "600" }}>
                ¿Tienes alguna limitación física?
              </p>
              <input
                style={{ height: "4rem" }}
                type="text"
                placeholder="Ninguna"
                className="register-form-input"
                required
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <p style={{ color: "#000", fontWeight: "600" }}>
                ¿Estrato socio económico?
              </p>
              <input
                style={{ height: "4rem" }}
                type="text"
                placeholder="Estrato 1"
                className="register-form-input"
                required
              />
            </div>
            <div className="register-form-content2">
              <p style={{ color: "#000" }}>¿Cómo prefieres qué te llamemos?</p>
              <div className="register-form-row2">
                <input
                  type="text"
                  value={mes}
                  className="register-form-input"
                  required
                />
                <input
                  type="text"
                  value={dia}
                  className="register-form-input"
                  required
                />
                <input
                  type="text"
                  value={anio}
                  className="register-form-input"
                  required
                />
              </div>
            </div>
            <div
              className="row-completed"
              style={{ marginTop: "2rem", justifyContent: "space-between" }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#000",
                  fontWeight: "700",
                }}
              >
                ¿Eres vegetariano/a?
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
            <Link
              to={"/home"}
              className="btn-comenzamos"
              style={{
                marginTop: "1rem",
                marginBottom: "5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Comencemos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
