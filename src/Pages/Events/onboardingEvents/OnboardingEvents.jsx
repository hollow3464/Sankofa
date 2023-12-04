import { useNavigate } from "react-router-dom";
import EventsLog from "../../../Components/eventsLog/EventsLog";
import "./onboardingEvents.css";

function OnboardingEvents() {
  const navigate = useNavigate();
  return (
    <>
      <section className="onboarding-events-container">
        <EventsLog colorText={"#000"} colorbg={"#fff"} text={"Eventos"} />
        <p className="mt-3" style={{fontSize: '14px'}}>
          Comparte, disfruta y aprende en entornos afrocentrados y enriquece tu
          experiencia con conocimiento, amistades y aprendizajes.
        </p>
        <button
          className="btn-filled mt-4"
          onClick={() => {
            navigate("/home/Events/next");
          }}
        >
          Continuar
        </button>
        <img
          src="/assets/images/paper_icesi.png"
          alt="paper"
          className="paper-onboarding-events"
        />
      </section>
    </>
  );
}

export default OnboardingEvents;
