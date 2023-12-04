import "./eventsLogVar.css";

// eslint-disable-next-line react/prop-types
function EventsLogVar({ colorbg, text, colorText }) {
  return (
    <>
      <div className="eventsLogVar-container">
        <div className="eventLogVar-images">
          <img
            src="/assets/images/torre_events_log.png"
            alt="building"
            className="building-eventsLogVar"
          />
          <img
            src="/assets/images/persons_log.png"
            alt="persons"
            className="persons-eventsLogVar"
          />
        </div>
        <div
          className="component-polygon-var"
          style={{ backgroundColor: `${colorbg}` }}
        >
          <h3 style={{ fontWeight: 700, color: `${colorText}` }}>{text}</h3>
        </div>
      </div>
    </>
  );
}

export default EventsLogVar;
