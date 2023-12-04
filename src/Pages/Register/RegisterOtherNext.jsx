import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './register.css'

function RegisterOtherNext() {
  const navigate = useNavigate();

  const handleUrl = () => {
    navigate('/Intro');
  }
  return (
    <>
        <div className="container-register-other">
        <div className="register-externo">
              <img
                src="/assets/images/logo_login.png"
                alt="Logo-Login"
                className="logo-login"
              />
              <h2 className="register-title"><span>¡Regístrate!</span>  y aprende todo lo que puede ofrecer la Diáspora Africana</h2>
              <p className="register-text" style={{fontWeight: '600'}}>Ya casi ¡Últimos pasos!</p>
              <Form
            onSubmit={(event) => {
                event.preventDefault();
                handleUrl();
              console.log("Has subido el formulario");
            }}
            style={{ width: "100%" }}
          >
            <Form.Group className="mb-3">
              <input
                type="text"
                className="input-filled"
                placeholder="Crea un nombre de usuario"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <input
                type="password"
                className="input-filled"
                placeholder="Crea una nueva contraseña"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <input
                type="password"
                className="input-filled"
                placeholder="Confirma la nueva contraseña"
              />
            </Form.Group>
            <button type="submit" className="btn-filled">Registrarme</button>
          </Form>
              <div className="images-container">
                    <img src="/assets/images/building2.png" alt="Edificio-Login" className="build-login"/>
                    <img src="/assets/images/persona-login-web.png" alt="Personas-Login-2" className="persona-login" />
                    <img src="/assets/images/frente_login.png" alt="Personas-Login-1" className="images-login" />
                </div>
            </div>
      </div>
    </>
  )
}

export default RegisterOtherNext