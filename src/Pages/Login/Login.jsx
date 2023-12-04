import { Form } from "react-bootstrap";
import "./login.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PreLogin from "./PreLogin";
// import {MdVisibility} from 'react-icons/md'

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mostrarPrelogin, setMostrarPrelogin] = useState(true);

  const navigate = useNavigate();

  const enviarParametros = (
    nombre,
    carrera,
    universidad,
    email,
    contrasena
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
  };
  useEffect(() => {
    // Cambia a la segunda pantalla después de un segundo
    const timeoutID = setTimeout(() => {
      setMostrarPrelogin(false);
    }, 2000);

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timeoutID);
  }, []);

  const handleSubmit = () => {
    let datos = sessionStorage.getItem("registerOthersData");
    datos = JSON.parse(datos);
    if (usuario !== "" && contraseña !== "") {
      if (usuario == "ShoXahu" && contraseña == "53074") {
        navigate("/home");
      }
      if (usuario == "A00346270" && contraseña == "123456") {
        navigate("/home");
        //Cargamos los parametros iniciales de los perfiles precargados
        enviarParametros(
          "Luisa Marinez",
          "Diseño de medios interactivos",
          "Universidad Icesi",
          "luma@correo.com",
          "123456"
        );
        sessionStorage.setItem("avatar", "👩🏾‍💼");
      }
      if (usuario == "A00359680" && contraseña == "123456") {
        navigate("/home");
        //Cargamos los parametros iniciales de los perfiles precargados
        enviarParametros(
          "Ingrid Vallecilla",
          "Diseño de medios interactivos",
          "Universidad Icesi",
          "invalle@correo.com",
          "123456"
        );
        sessionStorage.setItem("avatar", "👩🏽‍🏫");
      }
      if (usuario == datos.email && contraseña == datos.contraseña) {
        navigate("/home");
      }
    }
  };

  return (
    <>
      {mostrarPrelogin ? (
        <>
          <PreLogin />
        </>
      ) : (
        <>
          <div className="container-Login">
            <div className="login-form">
              <img
                src="/assets/images/logo2.png"
                alt="Logo-Login"
                className="logo-login"
              />
              <p className="text-login">
                <b>Vuelve a las raíz y explora</b> todo lo que la Diáspora
                Africana puede ofrecerte en la Universidad Icesi
              </p>
              <Form
                onSubmit={() => {
                  handleSubmit();
                }}
                // style={{ width: "100%" }}
                className="login-form-content"
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
                    Ingresa tu usuario
                  </label>
                  <input
                    required
                    type="text"
                    className="input-login"
                    onChange={(event) => {
                      setUsuario(event.target.value);
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
                    Ingresa tu contraseña
                  </label>
                  <input
                    required
                    type="password"
                    className="input-login"
                    onChange={(event) => {
                      setContraseña(event.target.value);
                    }}
                  />
                </div>
                <button type="submit" className="btn-login mb-4">
                  Ingresar
                </button>
                <Link to={"/register"} className="login-link mb-5">
                  ¿Aún no tienes cuenta? <b>¡Regístrate!</b>
                </Link>
                <p style={{ fontWeight: 500 }}>Olvidé mi contraseña</p>
              </Form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
