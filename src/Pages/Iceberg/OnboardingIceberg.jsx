import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./iceberg.css";

// eslint-disable-next-line react/prop-types
function OnboardingIceberg() {
  const navigate = useNavigate();
  return (
    <>
      <div className="onboarding-iceberg">
      <FaArrowLeft
            className="icon-back-iceberg"
            onClick={() => {
              navigate("/home/aprende");
            }}
          />
      <img
          src="/assets/images/torre_iceberg_onboard.png"
          className="torre-iceberg-onboard"
        />
        <img
          src="/assets/images/person_iceber_onboard.png"
          className="person-iceberg-onboard"
        />
        <div className="onboarding-iceberg-content">
          <aside className="onboarding2-iceberg-text">
            <p>
              <b>El racismo no se limita únicamente a agresiones evidentes,</b>{" "}
              también existen elementos que, a simple vista, pueden resultar
              sutiles pero que evocan un problema mayor y pueden afectar a las
              personas.
            </p>
          </aside>
          <button className="btn-filled-dark" onClick={() => {navigate('/home/Iceberg/onboard/2')}}>
            <img src="/assets/images/arrow.png" alt="arrow" />
          </button>
        </div>
      </div>
    </>
  );
}

export default OnboardingIceberg;
