import { Link } from "react-router-dom";
import AvatarPicker from "../../Components/AvatarPicker/AvatarPicker";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function RegisterProfile() {
  const [openModal, setOpenModal] = useState(false);
  const [chosseIcon, setChosseIcon] = useState("");
  const avatarPicker = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <Link
        to="/home"
        className="link-card-events3"
        style={{ zIndex: "5000", margin: "0" }}
      >
        <FaArrowLeft
          className="icon-back-banner"
          style={{ top: "-2rem", left: "1.5rem" }}
        />
      </Link>
      <h2 style={{ marginLeft: "1.5rem", marginTop: "3.5rem" }}>
        Sube una <span style={{ backgroundColor: "#EF8A25" }}>foto</span>
      </h2>
      <div className="register-profile-container">
        <div className="section-white">
          <p style={{ color: "#000" }}>
            Personaliza tu perfil para añadirle un toque más personal y único.
          </p>
          <img
            src="/assets/images/picker.png"
            alt=""
            className="register-profile-img"
            onClick={avatarPicker}
            style={{ display: chosseIcon != "" ? "none" : "" }}
          />
          <div
            className="round-picker"
            onClick={avatarPicker}
            style={{ display: chosseIcon == "" ? "none" : "" }}
          >
            <span
              style={{
                fontSize: "4rem",
              }}
            >
              {chosseIcon}
            </span>
          </div>
          <a
            style={{ marginTop: "2rem", color: "#000", fontWeight: "600" }}
            href=""
          >
            Brindar acceso a la cámara
          </a>
          <Link
            to={"/RegisterProfile/Form"}
            onClick={() => {
              sessionStorage.setItem("avatar", chosseIcon);
            }}
            className="btn-comenzamos"
            style={{
              marginTop: "2rem",
              marginBottom: "5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Continuar
          </Link>
        </div>
      </div>
      <AvatarPicker
        chosseIcon={setChosseIcon}
        visible={openModal}
        funtionVisible={setOpenModal}
      />
    </>
  );
}
