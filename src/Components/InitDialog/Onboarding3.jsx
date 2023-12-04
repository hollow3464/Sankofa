import { BsCircleFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Onboarding3({ handleStates }) {
  const handlePush = () => {
    console.log("Pasando");
  };

  return (
    <>
      <div className="white-screen"></div>
      <div className="onboarding">
        <img
          src="/assets/images/Onboarding3.png"
          className="onboarding-image"
        />
        <img
          src="/assets/images/torreMehaPasado.png"
          className="torre-onboarding-image"
        />
        <div className="onboarding-content">
          <aside className="onboarding3-text">
            <p style={{ textAlign: "start" }}>
              Queremos que te sientas seguro y apoyado en tu viaje
              universitario.pero antes queremos saber más de ti,{" "}
              <b>¡completa tu perfil!</b>
            </p>
            <Link to={"/RegisterProfile"} className="btn-comenzamos">
              Continuar
            </Link>
          </aside>
          <article className="onboarding-buttons-contains">
            <button
              onClick={() => handleStates("prev")}
              className="onboarding-row"
            >
              <IoIosArrowBack style={{ color: "#000" }} />
            </button>
            <i>
              <BsCircleFill style={{ color: "#000" }} />
            </i>
            <i>
              <BsCircleFill style={{ color: "#000" }} />
            </i>
            <i>
              <BsCircleFill style={{ color: "#000" }} />
            </i>
            <button
              onClick={() => handleStates("next")}
              className="onboarding-row"
              style={{ visibility: "hidden" }}
            >
              <IoIosArrowForward />
            </button>
          </article>
        </div>
      </div>
    </>
  );
}

export default Onboarding3;
