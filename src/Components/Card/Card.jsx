/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdPlace } from "react-icons/md";
import { FaArrowLeft, FaClock } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import "./card.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function Card({ title, text, textButton, colorbg, colortext, linkTo }) {
  return (
    <>
      <div
        className="card-container"
        style={{ backgroundColor: `${colorbg}`, color: `${colortext}` }}
      >
        <h5>{title}</h5>
        <p>{text}</p>
        <Link
          to={linkTo}
          className="btn-card"
          style={{ color: `${colortext}`, border: `2px solid ${colortext}` }}
        >
          {textButton}
        </Link>
      </div>
    </>
  );
}

export function CardHome1({
  title1,
  title2,
  text,
  colorbg,
  colortext,
  LinkTo,
}) {
  return (
    <>
      <Link
        to={LinkTo}
        className="card-home-container"
        style={{
          backgroundColor: `${colorbg}`,
          color: `${colortext}`,
          textDecoration: "none",
        }}
      >
        <div className="card-home-content1">
          <h5>{title1}</h5>
        </div>
        <div className="card-home-content2">
          <h5 style={{ color: "#fff" }}>{title2}</h5>
          <p style={{ color: "#fff" }}>{text}</p>
        </div>
      </Link>
    </>
  );
}

export function CardHome2({ title, colorbg, colortext, imagebg, image }) {
  return (
    <>
      <section
        className="card-home-secure-container"
        style={{ backgroundColor: `${colorbg}`, color: `${colortext}` }}
      >
        <div
          className="card-home-secure-content1"
          style={{
            backgroundImage: `linear-gradient(rgba(84, 79, 174, 0.8), rgba(84, 79, 174, 0.8)), url("${imagebg}")`,
          }}
        >
          <img src={image} alt="centro-banner" />
        </div>
        <div className="card-home-secure-content2">
          <p>{title}</p>
        </div>
      </section>
    </>
  );
}

export function CardBanner1({
  title,
  text1,
  text2,
  colorbg,
  colortext,
  imagebg,
  image,
  routeBack,
}) {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="cardBanner1-container"
        style={{ backgroundColor: `${colorbg}`, color: `${colortext}` }}
      >
        <FaArrowLeft
          className="icon-back-banner"
          onClick={() => {
            navigate(`${routeBack}`);
          }}
        />
        <div
          className="cardBanner1-content1"
          style={{
            backgroundImage: `linear-gradient(rgba(84, 79, 174, 0.8), rgba(84, 79, 174, 0.8)), url("${imagebg}")`,
          }}
        >
          <img src={image} alt="centro-banner" />
        </div>
        <div className="cardBanner1-content2">
          <h5>{title}</h5>
          <p>{text1}</p>
          <p>{text2}</p>
          <button className="btn-outlined">Página web</button>
        </div>
      </section>
    </>
  );
}

export function CardBanner3({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  colorbg,
  colortext,
  imagebg,
  image,
  routeBack,
}) {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="cardBanner1-container"
        style={{ backgroundColor: `${colorbg}`, color: `${colortext}` }}
      >
        <FaArrowLeft
          className="icon-back-banner"
          onClick={() => {
            navigate(`${routeBack}`);
          }}
        />
        <div
          className="cardBanner1-content1"
          style={{
            backgroundImage: `linear-gradient(rgba(84, 79, 174, 0.8), rgba(84, 79, 174, 0.8)), url("${imagebg}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="ofertas1-type">{text6}</div>
        </div>
        <div className="cardBanner1-content2">
          <h5>{title}</h5>
          <p>{text1}</p>
          {text2 ? <p>{text2}</p> : null}
          {text3 ? <p>{text3}</p> : null}
          {text4 ? (
            <ol>
              <li>{text4}</li>
              <br />
              <li>{text5}</li>
            </ol>
          ) : null}
          <button className="btn-outlined">Aplica</button>
        </div>
      </section>
    </>
  );
}

export function CardBanner2({
  title,
  text1,
  text2,
  colorbg,
  colortext,
  imagebg,
  image,
  routeBack,
  text3,
  isButton,
}) {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="cardBanner2-container"
        style={{
          backgroundColor: `${colorbg}`,
          color: `${colortext}`,
        }}
      >
        <FaArrowLeft
          style={{ marginTop: "2.5rem" }}
          className="icon-back-banner"
          onClick={() => {
            navigate(`/home/iceberg`);
          }}
        />
        <div
          className="cardBanner1-content1"
          style={{
            backgroundImage: `linear-gradient(rgba(84, 79, 174, 0.8), rgba(84, 79, 174, 0.8)), url("${imagebg}")`,
          }}
        >
          <img src={image} alt="centro-banner" />
        </div>
        <div className="cardBanner1-content2">
          <h5>{title}</h5>
          <p>{text1}</p>
          {text2 ? <p>{text2}</p> : null}
          <p style={{ fontWeight: "600" }}>{text3}</p>
          <div className="route-form-audio">
            <div className="route-form-audio-top"></div>
            <div className="route-form-audio-bottom">
              <input
                type="text"
                placeholder="Escribe el reporte"
                className="route-form-audio-input"
              />
              <RiSendPlaneFill
                style={{ fontSize: "1.5rem", color: "#54656F" }}
              />
            </div>
          </div>
          {isButton ? (
            <button className="btn-outlined" style={{ marginTop: "1.5rem" }}>
              Conoce más
            </button>
          ) : null}
        </div>
      </section>
    </>
  );
}

export function CardLink({
  title,
  text,
  textButton,
  colorbg,
  colortext,
  linkTo,
}) {
  return (
    <>
      <div
        className="card-container"
        style={{ backgroundColor: `${colorbg}`, color: `${colortext}` }}
      >
        <h5>{title}</h5>
        <p>{text}</p>
        <Link
          to={`${linkTo}`}
          className="btn-card"
          style={{ color: `${colortext}`, border: `2px solid ${colortext}` }}
        >
          {textButton}
        </Link>
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
export function CardProfile({
  title,
  text,
  color,
  image,
  textColor,
  linkTo,
  imgSize,
}) {
  return (
    <>
      <Link
        to={`${linkTo}`}
        className="card-profile"
        style={{ backgroundColor: `${color}`, color: `${textColor}` }}
      >
        <div className="text-card-profile-container">
          <h5 style={{ fontWeight: "900", fontSize: "1.35rem" }}>{title}</h5>
          <p style={{ fontSize: "0.70rem" }}>{text}</p>
        </div>
        <img
          src={image}
          alt="none"
          className="image-card-profile-container"
          style={{ height: imgSize }}
        />
      </Link>
    </>
  );
}

// eslint-disable-next-line react/prop-types
export function CardEvents1({
  minititle,
  title,
  ubicacion,
  hora,
  fecha,
  registrado,
  fondo,
}) {
  {
    return (
      <>
        <div className="card-events1-container">
          <div
            className="card-events1-content1"
            style={{ backgroundImage: `url(${fondo})` }}
          >
            {fecha}
          </div>
          <div className="card-events1-content2">
            <p className="texto-sm">{minititle}</p>
            <h5 style={{ fontSize: "16px", fontWeight: 600 }}>{title}</h5>
            <p className="texto-md">
              <MdPlace /> {ubicacion}
            </p>
            <p className="texto-md">
              <FaClock /> {hora}
            </p>
            {registrado ? (
              <img
                src="/assets/images/evento_registrado.png"
                alt="registrado"
                className="registrado"
              />
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

// eslint-disable-next-line react/prop-types
export function CardEvents2({
  title,
  text1,
  text2,
  text3,
  textButton,
  colorbg,
  colortext,
}) {
  return (
    <>
      <div
        className="card-events2"
        style={{ backgroundColor: `${colorbg}`, color: `${colortext}` }}
      >
        <h5 className="texto-xl">
          <b>{title}</b>
        </h5>
        <p className="texto-md">
          <i>{text1}</i>
        </p>
        <p className="texto-md">
          <i>{text2}</i>
        </p>
        <p className="texto-md">
          <i>{text3}</i>
        </p>
        <button
          className="btn-card"
          style={{
            color: `${colortext}`,
            border: `2px solid ${colortext}`,
            marginTop: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            fontSize: "13px",
          }}
        >
          {textButton}
        </button>
      </div>
    </>
  );
}

export function CardSemillero({ title, toLink }) {
  return (
    <Link
      to={toLink}
      className="cardSemillero-container"
      style={{ textDecoration: "none" }}
    >
      <img src="/assets/images/green.png" alt="green" />
      <aside className="cardSemillero-content">
        <p>
          <i>¿Aun no lo conoces?</i>
        </p>
        <h6>{title}</h6>
      </aside>
    </Link>
  );
}

export function CardCalendar({ fecha, lugar, hora }) {
  return (
    <div className="calendar-container">
      <img
        src="/assets/images/calendar.png"
        alt="calendar"
        style={{ width: "4rem" }}
      />
      <div className="divider-vertical"></div>
      <article className="calendar-content">
        <p>{fecha}</p>
        <p>{lugar}</p>
        <p>{hora}</p>
      </article>
    </div>
  );
}

export function CardEvents3({
  title,
  text,
  colorbg,
  colortext,
  image,
  fecha,
  tetxFooter,
  link,
}) {
  return (
    <>
      <Link
        to={link}
        className="card-events3"
        style={{ backgroundColor: `${colorbg}`, color: `${colortext}` }}
      >
        <div className="card-events3-title-container">
          <h5 className="texto-xl">
            <b>{title}</b>
          </h5>
          <button style={{ color: `${colortext}` }}>...</button>
        </div>
        <p className="texto-sm-card3">{text}</p>
        <hr
          style={{
            width: "100%",
            position: "absolute",
            bottom: "3.5rem",
            left: "0rem",
            color: `${colortext}`,
          }}
        />
        <div className="card-events3-footer-container">
          <img src={image} alt="none" style={{ height: "4rem" }} />
          <p style={{ fontSize: "0.8rem" }}>
            <b style={{ fontSize: "0.8rem" }}>{fecha}</b>
            <br />
            {tetxFooter}
          </p>
        </div>
      </Link>
    </>
  );
}

// eslint-disable-next-line react/prop-types
export function CardReport({ numReporte, fecha, estado }) {
  return (
    <div className="cardReport-container">
      <h3 style={{ fontWeight: 700 }}>Reporte #{numReporte}</h3>
      <p>
        <b>Fecha del caso:</b> {fecha}
      </p>
      <p>
        <b>Estado:</b> {estado}
      </p>
      <button
        className="btn-outlined"
        style={{ color: "black", border: "2px solid black", width: "12rem" }}
      >
        Historial
      </button>
    </div>
  );
}

export function CardConect({ title, text }) {
  return (
    <div className="cardConect-container">
      <h3 style={{ fontWeight: 600 }}>{title}</h3>
      <p>{text}</p>
      <button
        className="btn-outlined"
        style={{ color: "black", border: "2px solid black", width: "12rem" }}
      >
        Aprende más
      </button>
    </div>
  );
}

export function CardLearnLeftImg({
  text,
  img,
  title,
  left,
  right,
  top,
  linkTo,
}) {
  return (
    <Link to={linkTo} className="cardConect-container-learn">
      <div
        className="lefty-card"
        style={{
          paddingLeft: `${left}`,
          paddingRight: `${right}`,
          paddingTop: `${top}`,
        }}
      >
        <img src={img} alt="none" className="img-card-learn" />
      </div>
      <div className="right-card">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  );
}

export function CardLearntImgAll({ text, img, title, linkTo }) {
  return (
    <div className="cardConect-container-learn2">
      <div className="lefty-card" style={{ padding: "0" }}>
        <img src={img} alt="none" className="img-card-learn2" />
      </div>
      <div className="right-card">
        <h3 style={{ color: "#000" }}>{title}</h3>
        <p style={{ color: "#000" }}>{text}</p>
      </div>
    </div>
  );
}

export function CardLearntImgInsta({ text, img, title, href }) {
  return (
    <div className="cardConect-container-learn2">
      <div className="lefty-card" style={{ padding: "0", width: "4.5rem" }}>
        <img src={img} alt="none" className="img-card-learn2" />
      </div>
      <div className="right-card" style={{ marginLeft: "1rem" }}>
        <h3 style={{ color: "#000" }}>{title}</h3>
        <a href={href} style={{ color: "#000", fontSize: "0.7rem" }}>
          {text}
        </a>
      </div>
    </div>
  );
}

export function CardLearnImg({ img, title, linkTo }) {
  return (
    <Link
      to={linkTo}
      className="card-container-img-learn"
      style={{ textDecoration: "none" }}
    >
      <div className="top-card">
        <img src={img} alt="none" className="img-card-learn-auto" />
      </div>
      <div className="bottom-card">
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

export function CardLearnImg2({ img, title, backgroundColor, color, linkTo }) {
  return (
    <Link
      to={linkTo}
      className="card-container-img-learn2"
      style={{ backgroundColor: `${backgroundColor}`, textDecoration: "none" }}
    >
      <div className="top-card">
        <img src={img} alt="none" className="img-card-learn-auto" />
      </div>
      <div className="bottom-card">
        <h3 style={{ color: `${color}` }}>{title}</h3>
      </div>
    </Link>
  );
}

export function CardOfertas({ imagebg, title, text }) {
  return (
    <div className="cardOfertas-container">
      <div
        className="cardOfertas-content1"
        style={{
          backgroundImage: `linear-gradient(rgba(84, 79, 174, 0.8), rgba(84, 79, 174, 0.8)), url("${imagebg}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="cardOfertas-content2">
        <div className="ofertas-type">{text}</div>
        <h6 style={{ fontSize: "700" }}>{title}</h6>
      </div>
    </div>
  );
}
