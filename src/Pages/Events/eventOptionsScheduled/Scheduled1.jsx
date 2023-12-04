/* eslint-disable react/prop-types */
import EventsLog from "../../../Components/eventsLog/EventsLog";
import { FaArrowLeft } from "react-icons/fa";
import "./schedule.css";
import { useNavigate } from "react-router-dom";
import { CardCalendar, CardSemillero } from "../../../Components/Card/Card";
import { FaCheckCircle } from "react-icons/fa";

export function Scheduled1({
  scheduleType,
  title,
  text1,
  text2,
  fecha,
  lugar,
  hora,
  titleSemillero,
  scheduleForm,
  toLink,
}) {
  const navigate = useNavigate();
  let direction = "";
  if (titleSemillero == "Centro de Estudios Afrodiaspóricos") {
    direction = "/home/others/id=1";
  } else if (titleSemillero == "Grupo estudiantil Uramba") {
    direction = "/home/others/id=2";
  } else if (titleSemillero == "Semillero  de Estudios Afrodiaspóricos") {
    direction = "/home/others/id=3";
  } else {
    direction = "/home/events";
  }

  return (
    <>
      <div className="events-options-container">
        <FaArrowLeft
          className="icon-back-scheduled"
          onClick={() => {
            navigate("/home/Events/next");
          }}
        />
        <EventsLog text={"Eventos"} colorText={"#000"} colorbg={"#fff"} />
        <div className="card-option-schedule">
          <div className="scheduled-type">{scheduleType}</div>
          <h5 style={{ width: "85vw" }}>{title}</h5>
          <p className="text-scheduled">{text1}</p>
          {text2 ? <p className="text-scheduled">{text2}</p> : null}
          <CardCalendar fecha={fecha} lugar={lugar} hora={hora} />
          <CardSemillero title={titleSemillero} toLink={direction} />
          <button
            className="btn-outlined"
            onClick={() => {
              scheduleForm();
            }}
          >
            Agendarme
          </button>
        </div>
      </div>
    </>
  );
}

export function ScheduledReady({
  scheduleType,
  title,
  fecha,
  lugar,
  hora,
  participantes,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="events-options-container">
        <FaArrowLeft
          className="icon-back-scheduled"
          onClick={() => {
            navigate("/home/Events/next");
          }}
        />
        <EventsLog text={"Eventos"} colorText={"#000"} colorbg={"#fff"} />
        <div className="card-option-schedule">
          <div className="scheduled-type">{scheduleType}</div>
          <h5 style={{ width: "85vw", fontWeight: 700 }}>{title}</h5>
          <CardCalendar fecha={fecha} lugar={lugar} hora={hora} />
          <h2 style={{ fontWeight: 700 }}>
            Evento registrado{" "}
            <span style={{ backgroundColor: "#000", color: "#fff" }}>
              exitosamente
            </span>
            <FaCheckCircle
              style={{
                paddingLeft: "0.5rem",
                color: "#5427AE",
                fontSize: "3rem",
              }}
            />
          </h2>
          <p className="texto-md-otro">
            💁🏽‍♀️<b>{participantes}</b> Participantes se han inscrito
          </p>
          <button
            className="btn-outlined"
            onClick={() => {
              navigate("/Home/MyEvents");
            }}
          >
            Ir a mis eventos
          </button>
        </div>
      </div>
    </>
  );
}
