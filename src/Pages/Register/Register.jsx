import './register.css'
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegisterIcesi  = () => {
    navigate('/RegisterIcesi');
  }

  const handleRegisterOthers = () => {
    navigate('/RegisterOthers');
  }
  return (
    <>
      <div className="container-preregister">
            <div className="preregister-content">
              <img
                src="/assets/images/logo2.png"
                alt="Logo-Login"
                className="logo-login"
              />
              <p className="preregister-text"><b style={{backgroundColor:'#EF8A25'}}>¡Regístrate!</b> y encuentra en la universidad Icesi herramientas que  enriquecen tu experiencia universitaria</p>
              <button onClick={handleRegisterIcesi} className="btn-preregister-filled">Soy estudiante de la Universidad Icesi</button>
              <button onClick={handleRegisterOthers} className="btn-preregister-filled">Soy estudiante de otra institución</button>
              <div className="images-container">
                    <img src="/assets/images/torre-preregister.png" alt="Edificio-Login" className="build-login"/>
                    <img src="/assets/images/persons-preregister.png" alt="Personas-Login-2" className="persona-login" />
                </div>
            </div>
      </div>
    </>
  )
}

export default Register