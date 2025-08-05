import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import "./onboardingOfertas.css";
import OfertasLog from "../../../Components/ofertasLog/OfertasLog";

function OnboardingOfertas() {
    const navigate = useNavigate();
    return (
        <>
            <section className="onboarding-events-container">
                <FaArrowLeft
                    className="icon-back-home"
                    onClick={() => {
                        navigate("/home");
                    }}
                />
                <OfertasLog colorText={"#000"} colorbg={"#fff"} text={"Ofertas"} />
                <p className="mt-3" style={{ fontSize: "14px" }}>
                    Descubre un mundo de conocimiento en tu experiencia universitaria.
                    Encuentra ofertas, becas y monitorías que enriquecerán tu aprendizaje,
                    ayudándote a crecer y ampliar tus horizontes.
                </p>
                <button
                    className="btn-filled mt-4"
                    onClick={() => {
                        navigate("/home/ofertas/next");
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

export default OnboardingOfertas;
