import { BsCircle, BsCircleFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// eslint-disable-next-line react/prop-types
function Onboarding2({ handleStates }) {
  return (
    <>
      <div className="white-screen"></div>
      <div className="top-text">
        <h1>En Sankofa puedes:</h1>
      </div>
      <div className="onboarding">
        <img
          src="/assets/images/Onboarding2.png"
          className="onboarding-image"
        />
        <img
          src="/assets/images/torreMehaPasado.png"
          className="torre-onboarding-image"
        />
        <div className="onboarding-content">
          <aside className="onboarding2-text">
            <div style={{ display: "flex", gap: "0.6rem" }}>
              <span className="icon-number">1.</span>
              <p style={{ margin: "0" }}>
                Descubrir espacios para conectar estudiantes como tú. 👀
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.6rem" }}>
              <span className="icon-number">2.</span>
              <p style={{ margin: "0" }}>
                Denunciar cualquier tipo de violencia racial de manera segura.
                ✊🏾
              </p>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
            >
              <span className="icon-number">3.</span>
              <p style={{ margin: "0" }}>
                ¡Acceder a recursos educativos, ofertas y eventos culturales!
                aue aporten a tu experiencia universitaria
              </p>
            </div>
          </aside>
          <article className="onboarding-buttons-contains">
            <button
              onClick={() => handleStates("prev")}
              className="onboarding-row"
            >
              <IoIosArrowBack />
            </button>
            <i>
              <BsCircleFill style={{ color: "#000" }} />
            </i>
            <i>
              <BsCircleFill style={{ color: "#000" }} />
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

export default Onboarding2;
