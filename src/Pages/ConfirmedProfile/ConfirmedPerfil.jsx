import { Form, FormGroup } from "react-bootstrap";
import "./confirmedPerfil.css";

function ConfirmedProfile() {
  return (
    <>
      <div className="confirmed-container">
        <img
          src="/assets/images/logo_login.png"
          alt="Logo"
          className="logo-confirmed"
        />
        <div className="profile-confirmed-conteiner">
          <div className="avatar-picker">
            <button className="btn-perfil">👩🏾‍💻</button>
            <h3>Luisa Torres</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h5
              style={{
                padding: "0.5rem 6rem 0.5rem 6rem",
                backgroundColor: "#5427AE",
                display: "flex",
                justifyContent: "center",
              }}
            >
              ¡Listo tu perfil esta completo!
            </h5>
            <h6>Puedes volver a modificarlo cuando quieras</h6>
          </div>
        </div>
        <Form className="form-confirmed-container">
          <div className="row-confirmed-container">
            <div className="col1">
              <div className="row-completed">
                <input
                  type="text"
                  className="input-filled"
                  placeholder="Nombres"
                />
                <input
                  type="text"
                  className="input-filled"
                  placeholder="Apellidos"
                />
              </div>
              <div className="form-inputs-col1">
                <FormGroup>
                  <input
                    type="text"
                    className="input-filled"
                    placeholder="Carrera"
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="text"
                    className="input-filled"
                    placeholder="Universidad"
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="text"
                    className="input-filled"
                    placeholder="Correo"
                  />
                </FormGroup>
              </div>
            </div>
            <div className="col2">
              <FormGroup>
                <p>¿Cómo prefieres qué te llamemos?</p>
                <input
                  type="text"
                  placeholder=""
                  className="input-filled"
                  required
                />
              </FormGroup>
              <FormGroup>
                <p>¿Eres vegetariano(a)?</p>
                <select className="select-filled" required>
                  <option selected></option>
                  <option value="1">Si</option>
                  <option value="2">No</option>
                </select>
              </FormGroup>
              <div className="row-perfil">
                <input
                  type="number"
                  className="input-filled fecha"
                  placeholder="Mes"
                  required
                />
                <input
                  type="number"
                  className="input-filled fecha"
                  placeholder="Día"
                  required
                />
                <input
                  type="number"
                  className="input-filled fecha"
                  placeholder="Año"
                  required
                />
              </div>
            </div>
          </div>
          <button className="btn-orange">Exploremos</button>
        </Form>
        <div>
          <img
            src="/assets/images/building2.png"
            alt="build"
            className="building-perfil"
          />
          <img
            src="/assets/images/group.png"
            alt="group"
            className="group-perfil"
          />
          <img
            src="/assets/images/paper.png"
            alt="paper"
            className="paper-perfil"
          />
        </div>
      </div>
    </>
  );
}

export default ConfirmedProfile;
