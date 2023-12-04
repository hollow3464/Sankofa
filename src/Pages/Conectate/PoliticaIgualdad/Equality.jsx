import { CardConect } from "../../../Components/Card/Card";
import EqualityLog from "../../../Components/EqualityLog/EqualityLog";
import "./equality.css";

function Equality() {
  return (
    <section className="equality-container">
      <div className="conect-log">
        <EqualityLog
          text={"Política de"}
          colorbg={"#5427AE"}
          text1={"Igualdad de trato"}
          colorbg1={"#FFF"}
          colortext1={"#13100F"}
        />
        <p>
          La universidad ICESI, reconoce la importancia de destacar a grupos
          específicos que a menudo enfrentan desafíos particulares en nuestra
          sociedad. es por eso que La política de igualdad de trato tiene como
          objetivo brindar una atención especial y apoyo dentro de la población
          institucional como por ejemplo a nosotras y nosotros, como jóvenes
          afrodescendientes, raizales y/o palenquer@s.{" "}
        </p>
      </div>
      <div className="equality-cards">
        <div className="equalityCard-container">
          <h3 style={{ fontWeight: 600 }}>Soy homero</h3>
          <p>Hola</p>
          <button
            className="btn-outlined"
            style={{
              color: "black",
              border: "2px solid black",
              width: "12rem",
            }}
          >
            Aprende más
          </button>
        </div>
      </div>
      <img
        src="/assets/images/paper_conect.png"
        alt="paper"
        className="paper-equality"
      />
    </section>
  );
}

export default Equality;
