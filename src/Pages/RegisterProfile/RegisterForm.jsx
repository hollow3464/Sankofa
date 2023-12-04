import "./registerProfile.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function RegisterForm() {
  const [preferencia, setPreferencia] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [anio, setAnio] = useState("");
  const [vegetariano, setVegetariano] = useState(false);
  const [nombre, setNombre] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    let datos = sessionStorage.getItem("registerOthersData");
    datos = JSON.parse(datos);
    setNombre(datos ? datos.nombre.split(" ")[0] : "usuario");
    setAvatar(sessionStorage.getItem("avatar"));
  }, []);

  return (
    <>
      <Link
        to="/RegisterProfile"
        className="link-card-events"
        style={{ zIndex: "5000", margin: "0" }}
      >
        <FaArrowLeft
          className="icon-back-banner"
          style={{ top: "-2rem", left: "1.5rem" }}
        />
      </Link>

      <div className="register-form-container" style={{ marginTop: "4rem" }}>
        <div className="register-form-row">
          <div className="round-picker">
            <span
              style={{
                fontSize: "4rem",
              }}
            >
              {avatar}
            </span>
          </div>
          <h1>¡Hola! {nombre}</h1>
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
            Queremos conocerte un poco más
          </h6>
        </div>
        <div className="section-white">
          <div className="register-form-content-all">
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <p style={{ color: "#000" }}>¿Cómo prefieres qué te llamemos?</p>
              <input
                style={{ height: "4rem" }}
                type="text"
                placeholder=""
                onChange={(event) => {
                  setPreferencia(event.target.value);
                }}
                className="register-form-input"
                required
              />
            </div>
            <div className="register-form-content2">
              <p style={{ color: "#000" }}>¿Cómo prefieres qué te llamemos?</p>
              <div className="register-form-row2">
                <input
                  type="text"
                  placeholder="Mes"
                  className="register-form-input"
                  onChange={(event) => {
                    setMes(event.target.value);
                  }}
                  required
                />
                <input
                  type="text"
                  placeholder="Dia"
                  className="register-form-input"
                  onChange={(event) => {
                    setDia(event.target.value);
                  }}
                  required
                />
                <input
                  type="text"
                  placeholder="Año"
                  className="register-form-input"
                  onChange={(event) => {
                    setAnio(event.target.value);
                  }}
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
                    onChange={(event) => {
                      setVegetariano(event.target.value);
                    }}
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
              to={"/RegisterProfile/Form/End"}
              className="btn-comenzamos"
              onClick={() => {
                const datos = {
                  preferencia: preferencia,
                  dia: dia,
                  mes: mes,
                  anio: anio,
                  vegetariano: vegetariano,
                };
                sessionStorage.setItem("preferences", JSON.stringify(datos));
              }}
              style={{
                marginTop: "1rem",
                marginBottom: "5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Empezamos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
