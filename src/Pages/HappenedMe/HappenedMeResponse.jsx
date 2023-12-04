import { Link } from "react-router-dom";
import "./happenedMe.css";
import React from "react";

export default function HappenedMeResponse() {
  return (
    <div className="happened-me-container">
      <div className="happened-me-content-up">
        <div style={{ padding: "2rem" }}></div>
        <div className="happened-me-img-content">
          <img
            src="/assets/images/Onboarding5.png"
            alt="none"
            className="happened-me-img1"
          />
          <img
            src="/assets/images/torreMehaPasado.png"
            alt="none"
            className="happened-me-img2"
          />
        </div>
      </div>
      <div className="happened-me-content-down">
        <p>
          Por eso, te animamos a aprovechar todos los recursos que{" "}
          <b>Sankofa pone a tu disposición para aprender y recibir apoyo</b> en
          estas situaciones.
        </p>
        <Link to={"/home/aprende"} className="happened-me-btn">
          <h1 style={{ paddingBottom: "0" }} className="happened-me-icon">
            Explorar
          </h1>
        </Link>
      </div>
    </div>
  );
}
