import { BsCircle, BsCircleFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// eslint-disable-next-line react/prop-types
function Onboarding1({ handleStates }) {
  return (
    <>
      <div className="white-screen"></div>
      <div className="top-text">
        <h1>¡Te damos la bienvenida!</h1>
      </div>
      <div className="onboarding">
        <img
          src="/assets/images/Onboarding1.png"
          className="onboarding-image"
        />
        <img
          src="/assets/images/torreMehaPasado.png"
          className="torre-onboarding-image"
        />
        <div className="onboarding-content">
          <p className="onboarding-text">
            ¡Hola! Soy Yoseph, y estoy aquí para ser tu guía en la exploración
            de todo lo que Sankofa tiene para ofrecerte.
            <b>
              Nuestra misión es ayudarte a vivir la mejor experiencia
              universitaria posible.
            </b>
          </p>
          <p
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "0 1rem",
              marginBottom: "10rem",
              fontWeight: "600",
            }}
          >
            {" "}
            ¡Vamos juntos a descubrirlo!
          </p>
          <article className="onboarding-buttons-contains">
            <button
              onClick={() => handleStates("prev")}
              className="onboarding-row"
              style={{ visibility: "hidden" }}
            >
              <IoIosArrowBack />
            </button>
            <i>
              <BsCircleFill style={{ color: "#000" }} />
            </i>
            <i>
              <BsCircle style={{ color: "#000" }} />
            </i>
            <i>
              <BsCircle style={{ color: "#000" }} />
            </i>
            <button
              onClick={() => handleStates("next")}
              className="onboarding-row"
            >
              <IoIosArrowForward />
            </button>
          </article>
        </div>
      </div>
    </>
  );
}

export default Onboarding1;
