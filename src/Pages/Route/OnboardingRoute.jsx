import "./route.css";
import { Link } from "react-router-dom";
import { EventsLog3 } from "../../Components/eventsLog/EventsLog";

export default function OnboardingRoute() {
  return (
    <>
      <Link to="/Home" className="link-card-events3" style={{ zIndex: "1000" }}>
        {"<"}
      </Link>
      <div className="onboarding-route-container">
        <article className="my-event-logs">
          <EventsLog3 colorbg={"#fff"} text={"Rutas"} colorText={"#000"} />
        </article>
        <div className="unboarding-learn-content">
          <p>
            La universidad ICESI, reconoce la importancia de destacar a grupos
            específicos que a menudo enfrentan desafíos particulares en nuestra
            sociedad.
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
            to={"/home/Ruta/ofertas"}
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
