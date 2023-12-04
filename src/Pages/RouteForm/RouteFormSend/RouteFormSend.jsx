import { Card } from "../../../Components/Card/Card";
import "./routeFormSend.css";
import React from "react";

export default function RouteFormSend() {
  return (
    <div className="route-form-send-container">
      <div className="route-form-send-content-container">
        <div className="container-col1">
          <img
            src="/assets/images/routeLog.png"
            alt=""
            style={{ height: "12rem" }}
          />
          <div
            className="component-polygon"
            style={{
              backgroundColor: "#5427AE",
              width: "85%",
            }}
          >
            <h3 style={{ fontWeight: 700, color: "#fff" }}>
              Reporte enviado exitosamente
            </h3>
          </div>
          <p style={{ marginTop: "1.2rem", padding: "1rem", width: "80%" }}>
            Queremos que sepas que eres muy importante importante para nosotros
            y que esta semana recibirás una respuesta a tu solicitud. Mientras
            tanto, te instamos a rodearte de las personas y espacios seguros en
            nuestra institucion.
          </p>
        </div>
        <div className="container-col2">
          <Card
            title={"Eventos"}
            text={"Comparte y diviértete en espacios seguros y afrocentrados."}
            textButton={"Conoce más"}
            colorbg={"#D24040"}
            colortext={"#FFFFFF"}
          />
          <Card
            title={"Aprende"}
            text={
              <p>
                <b>Conocer es poder</b> actúa contra la discriminación y
                violencia racial.
              </p>
            }
            textButton={"Conoce más"}
            colorbg={"#FFFFFF"}
            colortext={"#000"}
          />
        </div>
      </div>
      <div className="img">
        <img
          src="/assets/images/building2.png"
          alt="building"
          className="building-route-form-send"
        />
        <img
          src="/assets/images/paper.png"
          alt="person"
          className="paper-route-form-send"
        />
        <img
          src="/assets/images/frente_login.png"
          alt="person"
          className="image-route-send"
        />
      </div>
    </div>
  );
}
