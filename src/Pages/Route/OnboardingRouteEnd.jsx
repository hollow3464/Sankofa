import React from "react";
import { Link } from "react-router-dom";

export default function OnboardingRouteEnd() {
  return (
    <div className="onboarding-route-end">
      <div className="white-screen"></div>
      <div className="top-text">
        <img src="/assets/images/routeLog.png" className="onboarding-image" />
      </div>
      <div className="onboarding">
        <img
          src="/assets/images/personaRutaTexto.png"
          className="onboarding-image"
          style={{ height: "16rem", width: "auto", marginLeft: "2rem" }}
        />
        <div className="onboarding-content">
          <p className="onboarding-text">
            Queremos que sepas que eres muy importante para nosotros y que esta
            semana recibirás una respuesta a tu solicitud. Mientras tanto, te
            instamos a rodearte de las personas, espacios seguros en nuestra
            institución.
          </p>
          <Link
            to={"/home"}
            className="btn-comenzamos"
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bottom: "2rem",
              width: "80%",
            }}
          >
            Volver al home
          </Link>
        </div>
      </div>
    </div>
  );
}
