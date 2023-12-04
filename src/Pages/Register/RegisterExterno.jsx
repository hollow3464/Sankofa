/* eslint-disable no-unused-vars */
import { Form } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { useState } from "react";

function RegisterExterno() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [universidad, setUniversidad] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const handleNext = () => {
    navigate("/Intro");
  };

  const enviarParametros = (
    nombre,
    carrera,
    universidad,
    email,
    contraseña
  ) => {
    const datos = {
      nombre: `${nombre}`,
      carrera: `${carrera}`,
      universidad: `${universidad}`,
      email: `${email}`,
      contraseña: `${contrasena}`,
    };

    // Guardar en sessionStorage
    sessionStorage.setItem("registerOthersData", JSON.stringify(datos));
    handleNext();
  };

  return (
    <>
      <div className="container-register-other">
        <div className="register-externo-content">
          <FaArrowLeft
            className="icon-back"
            onClick={() => {
              navigate("/register");
            }}
          />
          <h2 className="register-another-title">
            Ingresa tus{" "}
            <span style={{ backgroundColor: "#EF8A25" }}>datos</span>
          </h2>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              if (contrasena == confirmarContraseña) {
                enviarParametros(
                  nombre,
                  carrera,
                  universidad,
                  email,
                  contrasena
                );
              }
            }}
            className="register-another-form-content"
          >
            <div className="login-input-group mb-3">
              <label
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#13100F",
                  marginBottom: "0.5rem",
                }}
              >
                Nombre completo
              </label>
              <input
                required
                type="text"
                className="input-login"
                onChange={(event) => {
                  setNombre(event.target.value);
                }}
              />
            </div>
            <div className="login-input-group mb-3">
              <label
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#13100F",
                  marginBottom: "0.5rem",
                }}
              >
                Carrera o especialidad
              </label>
              <input
                required
                type="text"
                className="input-login"
                onChange={(event) => {
                  setCarrera(event.target.value);
                }}
              />
            </div>
            <div className="login-input-group mb-3">
              <label
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#13100F",
                  marginBottom: "0.5rem",
                }}
              >
                Universidad
              </label>
              <input
                required
                type="text"
                className="input-login"
                onChange={(event) => {
                  setUniversidad(event.target.value);
                }}
              />
            </div>
            <div className="login-input-group mb-3">
              <label
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#13100F",
                  marginBottom: "0.5rem",
                }}
              >
                Correo electrónico
              </label>
              <input
                required
                type="email"
                className="input-login"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="login-input-group mb-3">
              <label
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#13100F",
                  marginBottom: "0.5rem",
                }}
              >
                Crea una nueva contraseña
              </label>
              <input
                required
                type="password"
                className="input-login"
                onChange={(event) => {
                  setContrasena(event.target.value);
                }}
              />
            </div>
            <div className="login-input-group mb-3">
              <label
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#13100F",
                  marginBottom: "0.5rem",
                }}
              >
                Confirma la nueva contraseña
              </label>
              <input
                required
                type="password"
                className="input-login"
                onChange={(event) => {
                  setConfirmarContraseña(event.target.value);
                }}
              />
            </div>
            <div className="check-register">
              <input
                type="checkbox"
                style={{ width: "1.5rem" }}
                id="check-icesi"
                required
              />
              <label htmlFor="check-icesi">
                Estoy de acuerdo, con la política de privacidad de datos
              </label>
            </div>
            <button type="submit" className="btn-login mb-4">
              Continuar
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default RegisterExterno;
