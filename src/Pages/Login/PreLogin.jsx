import "./login.css";

function PreLogin() {

  return (
    <>
      <div className="container-prelogin">
        <div className="login-form">
          <img
            src="/assets/images/logo2.png"
            alt="Logo-Login"
            className="logo-login"
          />
          <img
            src="/assets/images/icesi.png"
            alt="banner_icesi"
            className="banner-prelogin"
          />
          <div className="images-login-container">
            <img
              src="/assets/images/torre_prelogin.png"
              alt="Edificio-Login"
              className="torre-login"
            />
            <img
              src="/assets/images/persona-login-web.png"
              alt="Personas-Login-2"
              className="person-login"
            />
            <img
              src="/assets/images/frente_login.png"
              alt="Personas-Login-1"
              className="personas-login"
            />
            <img
              src="/assets/images/paper_icesi.png"
              alt="paper"
              className="login-paper"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PreLogin;
