import { Form } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

function RegisterIcesi() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/Intro");
  };

  const enviarParametros = () => {
    const datos = {
      nombre: "surrender al 15",
      carrera: "surrender al 15",
      universidad: "surrender al 15",
      email: "surrender al 15",
      contraseña: "surrender al 15",
    };

    // Guardar en sessionStorage
    sessionStorage.setItem("registerIcesiData", JSON.stringify(datos));
  };
  return (
    <>
      <div className="container-preregister">
        <div className="register-icesi-content">
          <FaArrowLeft
            className="icon-back"
            onClick={() => {
              navigate("/register");
            }}
          />
          <h2 className="register-title">
            Ingresa tus{" "}
            <span style={{ backgroundColor: "#EF8A25" }}>datos</span>
          </h2>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              handleNext();
              console.log("Has subido el formulario");
            }}
            className="register-icesi-form-content"
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
                Código estudiantil
              </label>
              <input
                required
                type="text"
                className="input-login"
                // onChange={(event) => {
                //   setUsuario(event.target.value);
                // }}
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
                // onChange={(event) => {
                //   setUsuario(event.target.value);
                // }}
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
                // onChange={(event) => {
                //   setUsuario(event.target.value);
                // }}
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

export default RegisterIcesi;
