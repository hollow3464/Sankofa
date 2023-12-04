import { FaArrowRightLong } from "react-icons/fa6";
import "./happenedMe.css";
import React from "react";
import { Link } from "react-router-dom";

export default function HappenedMeTrue() {
  return (
    <div className="happened-me-container">
      <div className="happened-me-content-up">
        <div className="happened-me-text-content">
          <h4 className="happened-me-title-text">No has presentado</h4>
          <h4
            className="happened-me-title-text"
            style={{ padding: "0.5rem", backgroundColor: "#D24040" }}
          >
            episodio de violencia racial
          </h4>
        </div>
        <div className="happened-me-img-content">
          <img
            src="/assets/images/Onboarding4.png"
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
          Es importante que sepas que lo que experimentaste se relaciona temas
          serios. Esto puede ser una experiencia abrumadora, y quiero que sepas
          que <b>estamos aquí para ti</b> en este momento.
        </p>
        <Link to={"/home/MeHaPasado/Response"} className="happened-me-btn">
          <FaArrowRightLong className="happened-me-icon" />
        </Link>
      </div>
    </div>
  );
}
