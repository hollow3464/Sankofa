import "./learn.css";
import { Link } from "react-router-dom";
import { EventsLog2 } from "../../Components/eventsLog/EventsLog";
import { FaArrowLeft } from "react-icons/fa";

export default function UnboardingLearn() {
  return (
    <>
      <Link
        to="/home"
        className="link-card-events3"
        style={{ zIndex: "5000", margin: "0" }}
      >
        <FaArrowLeft className="icon-back-banner" style={{ top: "-4rem" }} />
      </Link>
      <div className="unboarding-learn-container" style={{ marginTop: "3rem" }}>
        <article className="my-event-logs">
          <EventsLog2 colorbg={"#fff"} text={"Aprende"} colorText={"#000"} />
        </article>
        <div className="unboarding-learn-content">
          <p>
            <b>El conocimiento empodera</b>. En esta sección, encontrarás
            herramientas para identificar y brindar apoyo a personas que han
            experimentado discriminación racial.
          </p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "1.5rem",
            paddingTop: "0",
          }}
        >
          <Link
            to={"/home/Aprende"}
            className="unboarding-learn-button"
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            Continuar
          </Link>
        </div>
      </div>
    </>
  );
}
