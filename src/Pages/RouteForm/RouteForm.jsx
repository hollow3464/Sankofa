import { Form, FormGroup } from "react-bootstrap";
import { BiSolidMicrophone } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import "./routeForm.css";
import { useState } from "react";

export default function RouteForm() {
  const [contentEditText, setContentEditText] = useState(false);
  return (
    <div className="route-form-container">
      <div className="route-form-content-container">
        <div className="route-form-title-container">
          <img
            src="/assets/images/routeLog.png"
            alt=""
            style={{ height: "12rem" }}
          />
          <p className="route-form-paragraph">
            Lamentamos profundamente que hayas experimentado momentos de
            vulnerabilidad. <span>Estamos aquí para acompanarte</span>{" "}
            <b>
              y proporcionarte el apoyo para mejorar tu experiencia
              universitaria.
            </b>
          </p>
          <Form className="form-confirmed-container">
            <div className="row-confirmed-container">
              <div className="col1">
                <div className="row-completed">
                  <p style={{ display: "flex", alignItems: "center" }}>
                    ¿Eres la persona afectada?
                  </p>
                  <span style={{ fontSize: "1.2rem" }}>No</span>
                  <div
                    className="form-check form-switch"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      form="flexSwitchCheckDefault"
                    >
                      Si
                    </label>
                  </div>
                </div>
                <div className="row-completed" style={{ marginTop: "0.9rem" }}>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "50%",
                    }}
                  >
                    ¿Deseas realizar la denuncia de manera anonima?
                  </p>
                  <span style={{ fontSize: "1.2rem" }}>No</span>
                  <div
                    className="form-check form-switch"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      form="flexSwitchCheckDefault"
                    >
                      Si
                    </label>
                  </div>
                </div>
                <div
                  className="row-completed"
                  style={{ marginTop: "0.9rem", gap: "2rem" }}
                >
                  <FormGroup>
                    <input
                      type="text"
                      className="input-filled"
                      placeholder="Nombre"
                      style={{ height: "2.4rem", width: "15rem" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      className="input-filled"
                      placeholder="Codigo"
                      style={{ height: "2.4rem", width: "9.4rem" }}
                    />
                  </FormGroup>
                </div>
                <div
                  className="form-inputs-col1"
                  style={{ marginTop: "0.9rem" }}
                >
                  <p>¿Perfil de la persona que te vulnero o discrimino</p>
                  <select
                    className="select-filled"
                    required
                    style={{ width: "100%", maxWidth: "26.3rem" }}
                  >
                    <option selected>Ingresa campo</option>
                    <option value="1">Estudíante</option>
                    <option value="2">Profesor</option>
                    <option value="2">Director</option>
                  </select>
                </div>
              </div>
              <div className="col2">
                <p>¿Cuentanos que paso?</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontSize: "12px" }}>
                    Escribe o háblanos del caso
                  </p>
                  <div style={{ display: "flex", gap: "2rem" }}>
                    <AiFillMessage
                      className={`route-form-icon ${
                        contentEditText ? "focus" : ""
                      }`}
                      onClick={() => setContentEditText(!contentEditText)}
                    />
                    <BiSolidMicrophone className="route-form-icon" />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
        <div
          className={
            contentEditText
              ? "route-form-foot-container-visible"
              : "route-form-foot-container-not-visible"
          }
        >
          <div className="route-form-content-edit-text">
            <textarea
              name="comentarios"
              style={{ border: "none", width: "100%", height: "100%" }}
            >
              ¿Cuentanos que paso?
            </textarea>
          </div>
          <div className="route-form-buttons-container">
            <button className="route-form-buttons">Editar Texto</button>
            <input
              type="submit"
              value="Continuar"
              className="route-form-buttons"
            />
          </div>
        </div>
      </div>
      <div className="image">
        <img
          src="/assets/images/paper3.png"
          alt=""
          className={`${
            contentEditText
              ? "paper-route-form-not-visible"
              : "paper-route-form-visible"
          }`}
        />
      </div>
    </div>
  );
}
