/* eslint-disable react/prop-types */
import "./eventsLog.css";

// eslint-disable-next-line react/prop-types
function EventsLog({ colorbg, text, colorText }) {
  return (
    <>
      <div className="eventsLog-container">
        <div className="eventLog-images" style={{ zIndex: "-1" }}>
          <img
            src="/assets/images/torreEvents.png"
            alt="building"
            className="building-eventsLog"
            style={{ zIndex: "-1" }}
          />
          <img
            src="/assets/images/persons_log.png"
            alt="persons"
            className="persons-eventsLog"
            style={{ zIndex: "-1" }}
          />
        </div>
        <div
          className="component-polygon"
          style={{ backgroundColor: `${colorbg}` }}
        >
          <h3 style={{ fontWeight: 700, color: `${colorText}` }}>{text}</h3>
        </div>
      </div>
    </>
  );
}

export function EventsLog2({ colorbg, text, colorText }) {
  return (
    <>
      <div className="eventsLog2-container">
        <div className="eventLog2-images">
          <img
            src="/assets/images/librosAprende.png"
            alt="persons"
            className="libros-eventlog2"
          />
          <img
            src="/assets/images/torreAprende.png"
            alt="persons"
            className="torre-eventLog2"
          />
          <img
            src="/assets/images/personaAprende.png"
            alt="none"
            className="person-eventLog2"
          />
        </div>
        <div
          className="title-container"
          style={{ backgroundColor: `${colorbg}` }}
        >
          <h3
            style={{ fontWeight: 700, color: `${colorText}` }}
            className="title-text"
          >
            {text}
          </h3>
        </div>
      </div>
    </>
  );
}

export function EventsLog3({ colorbg, text, colorText }) {
  return (
    <>
      <div className="eventsLog2-container">
        <div className="eventLog2-images">
          <img
            src="/assets/images/torreRuta.png"
            alt="persons"
            className="libros-eventlog2"
          />
          <img
            src="/assets/images/persona2Ruta.png"
            alt="persons"
            className="torre-eventLog2"
          />
          <img
            src="/assets/images/persona1Ruta.png"
            alt="none"
            className="person-eventLog2"
          />
        </div>
        <div
          className="title-container"
          style={{ backgroundColor: `${colorbg}` }}
        >
          <h3
            style={{ fontWeight: 700, color: `${colorText}` }}
            className="title-text"
          >
            {text}
          </h3>
        </div>
      </div>
    </>
  );
}

export default EventsLog;
