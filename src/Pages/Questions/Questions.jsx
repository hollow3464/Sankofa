/* eslint-disable no-unused-vars */
import "./questions.css";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Questions() {
  const arrayText = [
    {
      question: "¿Alguna vez alguien ha tocado tu cabello sin tu permiso?",
      color1: "#D24040",
      color2: "#EF8A25",
      color3: "#5427AE",
    },
    {
      question: "¿Te han llamado por apodos que tengan que ver con el color? ",
      color1: "#5427AE",
      color2: "#D24040",
      color3: "#EF8A25",
    },
    {
      question:
        "Eres negro/a entonces debes ser bueno/a  en [actividad estereotípicamente asociada con un grupo racial o étnico]",
      color1: "#EF8A25",
      color2: "#5427AE",
      color3: "#D24040",
    },
    {
      question: "¿Te han llamado por estos diminutivos? Negrito/a Morenito/a",
      color1: "#D24040",
      color2: "#EF8A25",
      color3: "#5427AE",
    },
    {
      question:
        "¿Han usado esta frase para referirse a ti o a alguien que conoces? “Negro/a tenia que ser”",
      color1: "#5427AE",
      color2: "#D24040",
      color3: "#EF8A25",
    },
    {
      question:
        "¿Han usado esta frase para referirse a ti o a alguien que conoces? “Para ser negro/a, eres muy inteligente”",
      color1: "#EF8A25",
      color2: "#5427AE",
      color3: "#D24040",
    },
    {
      question:
        '¿Han usado esta frase para referirse a ti o a alguien que conoces? “Le pasó por negro/a".',
      color1: "#D24040",
      color2: "#EF8A25",
      color3: "#5427AE",
    },
    {
      question:
        "¿Has escuchado estas frases en tu entorno? “Ahí hubo mano negra.”",
      color1: "#D24040",
      color2: "#EF8A25",
      color3: "#5427AE",
    },
    {
      question: '¿Has escuchado estas frases en tu entorno? "La vi negra"',
      color1: "#5427AE",
      color2: "#D24040",
      color3: "#EF8A25",
    },
    {
      question:
        '¿Has escuchado estas frases en tu entorno? “Para ser negro/a, tienes una cara muy linda"',
      color1: "#EF8A25",
      color2: "#5427AE",
      color3: "#D24040",
    },
  ];

  const arrayOnBoarding = [
    {
      img1: "/assets/images/comentario1_onBoarding.png",
      img2: "/assets/images/onboarding.png",
      img3: "/assets/images/comentario1_onBoarding3.png",
      displayGlobal: "",
      displayImgButton: "block",
      displayImgComent: "none",
      transform: "rotate(0deg)",
      rigth: "-7rem",
      bottom: "0",
    },
    {
      img1: "/assets/images/comentario1_onBoarding2.png",
      img2: "/assets/images/onboarding.png",
      img3: "/assets/images/comentario1_onBoarding3.png",
      displayGlobal: "",
      displayImgButton: "block",
      displayImgComent: "none",
      transform: "rotate(-35deg)",
      rigth: "-12rem",
      bottom: "8rem",
    },
    {
      img1: "/assets/images/comentario1_onBoarding2.png",
      img2: "/assets/images/onboarding.png",
      img3: "/assets/images/comentario1_onBoarding3.png",
      displayGlobal: "",
      displayImgButton: "none",
      displayImgComent: "block",
      transform: "rotate(-35deg)",
      rigth: "-12rem",
      bottom: "8rem",
    },
    {
      img1: "/assets/images/comentario1_onBoarding2.png",
      img2: "/assets/images/onboarding.png",
      img3: "/assets/images/comentario1_onBoarding3.png",
      displayGlobal: "none",
      displayImgButton: "none",
      displayImgComent: "block",
      transform: "rotate(-35deg)",
      rigth: "-12rem",
      bottom: "8rem",
    },
  ];
  const [onBoardingContent, setOnBoardingContent] = useState(1);
  const [countQuestions, setCountQuestions] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [miLista, setMiLista] = useState([]);
  const navigate = useNavigate();

  const handleCheck = () => {
    if (countQuestions < totalQuestions) {
      setCountQuestions(countQuestions + 1);
      setMiLista((prevLista) => [...prevLista, true]);
    }
    if (countQuestions >= totalQuestions && miLista.includes(true)) {
      navigate("/home/MeHaPasado/1");
    }
    if (countQuestions >= totalQuestions && !miLista.includes(true)) {
      navigate("/home/MeHaPasado/2");
    }
  };

  const handleContinueOnboarding = () => {
    setOnBoardingContent(onBoardingContent + 1);
  };

  const handleBad = () => {
    console.log(miLista.includes(true));
    if (countQuestions >= totalQuestions && miLista.includes(true)) {
      navigate("/home/MeHaPasado/1");
    }
    if (countQuestions < totalQuestions) {
      setCountQuestions(countQuestions + 1);
      setMiLista((prevLista) => [...prevLista, false]);
    }
    if (countQuestions >= totalQuestions && !miLista.includes(true)) {
      navigate("/home/MeHaPasado/2");
    }
  };

  return (
    <>
      <Link
        to="/home/Aprende"
        className="link-card-events3"
        style={{ zIndex: "10", fontSize: "1.8rem" }}
      >
        <FaArrowLeft />
      </Link>
      <div className="questions-container">
        <div className="question-card-container-1">
          <QuestionCard
            question={arrayText[countQuestions - 1].question}
            color1={arrayText[countQuestions - 1].color1}
            color2={arrayText[countQuestions - 1].color2}
            color3={arrayText[countQuestions - 1].color3}
          />
        </div>
        <div className="arrow-container">
          <FaCheckCircle className="arrow-1" onClick={handleCheck} />
          <IoMdCloseCircle
            className="arrow-2"
            onClick={handleBad}
          ></IoMdCloseCircle>
        </div>
        <div className="text-question-container">
          <p
            style={{
              textAlign: "center",
              fontSize: "0.8rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              paddingTop: "2rem",
              paddingBottom: "1.2rem",
              margin: "0",
            }}
          >
            Desliza a la <b>derecha si has vivido</b> este tipo de situaciones
            en la universidad ICESI o a la <b>izquierda si no te ha pasado.</b>
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "1rem",
            }}
          >
            <b>
              {countQuestions}/{totalQuestions} Tarjetas
            </b>
          </p>
        </div>
      </div>
      <div
        className="on-boarding-container-question"
        style={{
          display: `${arrayOnBoarding[onBoardingContent - 1].displayGlobal}`,
        }}
      >
        <div className="on-boarding-question">
          <div className="on-boarding-container-content">
            <div className="on-boarding-container-img1">
              <img
                src={arrayOnBoarding[onBoardingContent - 1].img1}
                alt="none"
                className="on-boarding-coment-img"
              />
              <div
                className="on-boarding-container-content2"
                style={{
                  display: `${
                    arrayOnBoarding[onBoardingContent - 1].displayImgComent
                  }`,
                }}
              >
                <img
                  src={arrayOnBoarding[onBoardingContent - 1].img3}
                  alt="none"
                  className="on-boarding-coment-img"
                />
                <button
                  className="btn-card"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: `#fff`,
                    border: `2px`,
                    backgroundColor: "#000",
                  }}
                  onClick={handleContinueOnboarding}
                >
                  <FaArrowRightLong />
                </button>
              </div>
              <button
                className="btn-card"
                style={{
                  color: `#fff`,
                  border: `2px solid #fff`,
                  display: `${
                    arrayOnBoarding[onBoardingContent - 1].displayImgButton
                  }`,
                }}
                onClick={handleContinueOnboarding}
              >
                <FaArrowRightLong />
              </button>
            </div>
            <div className="on-boarding-container-img2">
              <img
                src={arrayOnBoarding[onBoardingContent - 1].img2}
                alt="none"
                className="on-boarding-img"
                style={{
                  transform: `${
                    arrayOnBoarding[onBoardingContent - 1].transform
                  }`,
                  right: `${arrayOnBoarding[onBoardingContent - 1].rigth}`,
                  bottom: `${arrayOnBoarding[onBoardingContent - 1].bottom}`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="on-boarding-background"></div>
      </div>
    </>
  );
}
