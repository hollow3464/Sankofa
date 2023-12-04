import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./iceberg.css";

// eslint-disable-next-line react/prop-types
function OnboardingIceberg2() {
  const navigate = useNavigate();
  return (
    <>
      <div className="iceberg-filter">
        <img src="/assets/images/IcebergFondo.png" className="fondo-iceberg1" />

        <div
          className="onboarding2-iceberg"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <FaArrowLeft
            className="icon-back-iceberg"
            onClick={() => {
              navigate("/home/aprende");
            }}
            style={{ marginTop: "10vh" }}
          />
          <img
            src="/assets/images/person_iceberg_2.png"
            className="onboarding-iceberg2-image"
          />
          <div className="onboarding-iceberg-content">
            <aside className="onboarding2-iceberg-text">
              <p>
                <b>
                  El racismo no se limita únicamente a agresiones evidentes,
                </b>{" "}
                también existen elementos que, a simple vista, pueden resultar
                sutiles pero que evocan un problema mayor y pueden afectar a las
                personas.
              </p>
            </aside>
            <button
              className="btn-filled-dark"
              onClick={() => {
                navigate("/home/Iceberg");
              }}
            >
              <img src="/assets/images/arrow.png" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnboardingIceberg2;
