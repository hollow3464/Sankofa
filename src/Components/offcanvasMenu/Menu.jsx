import { IoCloseSharp } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import "./menu.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Menu({ handleMenu, option }) {
  let datos = sessionStorage.getItem("registerOthersData");
  datos = JSON.parse(datos);
  const nombre = datos.nombre;
  return (
    <>
      <section className={option ? "menu-container" : "menu-container-off"}>
        <div className="menu-perfil-icon">
          <div className="menu-perfil-content">
            {sessionStorage.getItem("avatar")}
          </div>
        </div>
        <IoCloseSharp className="closebtn" onClick={() => handleMenu(false)} />
        <h3>{nombre}</h3>
        <Link
          to="/home/profile"
          onClick={() => handleMenu(false)}
          style={{
            color: "white",
            margin: "-0.5rem 2rem 2rem",
            fontSize: "12px",
          }}
        >
          Ir a mi perfil
        </Link>
        <Link
          to="/home"
          className="menu-item"
          onClick={() => handleMenu(false)}
        >
          Inicio
        </Link>
        <Link
          to="/home/events"
          className="menu-item"
          onClick={() => handleMenu(false)}
        >
          Eventos
        </Link>
        <Link
          to="/home/unboarding-aprende"
          className="menu-item"
          onClick={() => handleMenu(false)}
        >
          Aprende
        </Link>
        <Link
          to={"/home/ofertas"}
          className="menu-item"
          onClick={() => handleMenu(false)}
        >
          Ofertas
        </Link>
        <Link
          to={"/home/ruta"}
          className="menu-item"
          onClick={() => handleMenu(false)}
        >
          Ruta
        </Link>
        <Link to="/" className="btn-logOut">
          <BiLogOut style={{ fontSize: "1.5rem", paddingRight: "0.2rem" }} />{" "}
          Salir
        </Link>
        <img
          src="/assets/images/tower_menu.png"
          alt="building"
          className="building-menu-icon"
        />
      </section>
      <div
        className={option ? "whiteScreen-menu" : "whiteScreen-menu-off"}
      ></div>
    </>
  );
}

export default Menu;
