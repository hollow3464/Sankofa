import "./myEvents.css";
import { CardLink } from "../../../Components/Card/Card";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export function MyEvents() {
  return (
    <>
      <Link
        to="/Home/Profile"
        className="link-card-events3"
        style={{ zIndex: "5000", margin: "0" }}
      >
        <FaArrowLeft className="icon-back-banner" style={{ top: "-2rem" }} />
      </Link>
      <div className="detail-events-container">
        <article className="my-event-logs">
          <img
            src="/assets/images/eventosLog1.png"
            alt=""
            style={{
              height: "14.5rem",
              width: "auto",
              marginRight: "3rem",
            }}
          />
        </article>
        <div className="section-two-container-my-events">
          <p
            style={{
              fontWeight: "600",
              height: "0.1rem",
              paddingLeft: "0.5rem",
              fontSize: "1.2rem",
            }}
          >
            Tienes dos Eventos registrados
          </p>
          <div className="calendar">
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: "0.5rem",
              }}
            >
              <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                Noviembre 2023
              </span>{" "}
              <span style={{ fontSize: "1.5rem" }}>{"< >"}</span>
            </div>
            <ol>
              <li className="day-name">Lu</li>
              <li className="day-name">Ma</li>
              <li className="day-name">Mi</li>
              <li className="day-name">Ju</li>
              <li className="day-name">Vi</li>
              <li className="day-name">Sa</li>
              <li className="day-name">Do</li>
              <li className="first-day">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li
                className="day-event"
                style={{ backgroundColor: "#5427AE", color: "#fff" }}
              >
                8
              </li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li
                className="day-event"
                style={{ backgroundColor: "#A4A4A4", color: "#fff" }}
              >
                13
              </li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>31</li>
            </ol>
          </div>
          <div className="row-my-events">
            <div className="colum-1-my-events">
              <CardLink
                title={"Cumpleaños CEAF"}
                text={"lugar auditorio, Manuelita, Icesi"}
                textButton={"Ver evento"}
                colorbg={"#5427AE"}
                colortext={"#fff"}
                linkTo={"/Home/DetailEvents/1"}
              />
            </div>
            <div className="colum-2-my-events">
              <h3
                style={{
                  color: "#000",
                  fontWeight: "800",
                  fontSize: "1rem",
                }}
              >
                Jueves 8 de noviembre
              </h3>
              <p
                style={{
                  color: "#000",
                  fontSize: "0.8rem",
                }}
              >
                Hoy no has mas eventos registrados.
              </p>
            </div>
          </div>
          <div className="row-my-events">
            <div className="colum-1-my-events">
              <CardLink
                title={"Encuentro Estudiantil"}
                text={"Lugar: Salon 102M, Universidad Icesi"}
                textButton={"Ver evento"}
                colorbg={"#A4A4A4"}
                colortext={"#fff"}
                linkTo={"/Home/DetailEvents/2"}
              />
            </div>
            <div className="colum-2-my-events">
              <h3
                style={{
                  color: "#000",
                  fontWeight: "800",
                  fontSize: "1rem",
                }}
              >
                Martes, 13 de noviembre
              </h3>
              <p
                style={{
                  color: "#000",
                  fontSize: "0.8rem",
                }}
              >
                Por el momento, no hay más eventos, para ese día.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "0.8rem",
            }}
          >
            <p>
              Faltan<b>5</b> dias para este evento.{" "}
            </p>
          </div>
          <Link
            to={"/home/Events/next"}
            className="btn-card"
            style={{
              color: "#000",
              border: `2px solid #000`,
              maxHeight: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Ver mas eventos
          </Link>
        </div>
      </div>
      <div>
        <img
          style={{ width: "160rem", height: "40rem", zIndex: "4" }}
          src="/assets/images/paper2.png"
          alt="paper2"
          className="paper-perfil1"
        />
      </div>
    </>
  );
}
