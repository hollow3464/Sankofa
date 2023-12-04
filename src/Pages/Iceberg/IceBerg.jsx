import "./iceberg.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function IceBerg() {
  return (
    <>
      <Link
        to="/home/aprende"
        className="link-card-events3"
        style={{ zIndex: "5000", margin: "0" }}
      >
        <FaArrowLeft className="icon-back-banner" style={{ top: "-2rem" }} />
      </Link>
      <div className="iceber-log">
        <img src="/assets/images/icebergLog.png" alt="" className="" />
      </div>
      <div className="iceberg-container">
        <img
          src="/assets/images/IcebergFondo.png"
          alt=""
          className="img-iceberg"
        />
        <div className="iceberg-content-text">
          <Link className="iceber-button-container" to={"/home/iceberg/1"}>
            <span className="iceberg-button" style={{ marginLeft: "10%" }}>
              Violencia racial
            </span>
          </Link>
          <Link
            className="iceber-button-container"
            to={"/home/iceberg/2"}
            style={{
              justifyContent: "end",
              marginRight: "9%",
              marginTop: "10%",
            }}
          >
            <span className="iceberg-button">Xenofobia</span>
          </Link>
          <Link
            className="iceber-button-container"
            to={"/home/iceberg/3"}
            style={{ marginTop: "11.5%", justifyContent: "center" }}
          >
            <span className="iceberg-button">Prejuicios raciales</span>
          </Link>
          <Link
            className="iceber-button-container"
            to={"/home/iceberg/4"}
            style={{
              marginTop: "12%",
              justifyContent: "end",
              marginRight: "6%",
            }}
          >
            <span className="iceberg-button">Racismo Simbólico</span>
          </Link>
          <Link
            className="iceber-button-container"
            to={"/home/iceberg/5"}
            style={{
              marginTop: "12%",
              justifyContent: "start",
              marginLeft: "8%",
            }}
          >
            <span className="iceberg-button">Racismo Institucional</span>
          </Link>
          <Link
            className="iceber-button-container"
            to={"/home/iceberg/6"}
            style={{
              marginTop: "12%",
              justifyContent: "end",
              marginRight: "8%",
            }}
          >
            <span className="iceberg-button">Racismo Científico</span>
          </Link>
        </div>
      </div>
    </>
  );
}
