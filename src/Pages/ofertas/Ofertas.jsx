import { useState } from "react";
import ParaTi from "./ofertasOption/ParaTi";
import SemilleroCeaf from "./ofertasOption/SemilleroCeaf";
import UniversidadIcesi from "./ofertasOption/UniversidadIcesi";
import Ceaf from "./ofertasOption/Ceaf";
import Uramba from "./ofertasOption/Uramba";
import "./ofertas.css";

function Ofertas() {
  const [elementSelect, setElementSelect] = useState(0);
  const changeSelect = (sel) => {
    setElementSelect(sel);
  };
  return (
    <>
      <div className="ofertas-container">
        <div className="ofertas-perfil">{sessionStorage.getItem("avatar")}</div>
        <hr style={{ color: "#fff", width: "100vw", height: "1px" }} />
        <div className="seleccionar-eventos">
          <div className="content-options">
            <p
              onClick={() => {
                changeSelect(0);
              }}
              className={elementSelect == 0 ? "selected-events" : null}
            >
              Para ti
            </p>
            <p
              onClick={() => {
                changeSelect(1);
              }}
              className={elementSelect == 1 ? "selected-events" : null}
            >
              Universidad de ICESI
            </p>
            <p
              onClick={() => {
                changeSelect(2);
              }}
              className={elementSelect == 2 ? "selected-events" : null}
            >
              CEAF
            </p>
            <p
              onClick={() => {
                changeSelect(3);
              }}
              className={elementSelect == 3 ? "selected-events" : null}
            >
              Semillero CEAF
            </p>
            <p
              onClick={() => {
                changeSelect(4);
              }}
              className={elementSelect == 4 ? "selected-events" : null}
            >
              Uramba
            </p>
          </div>
        </div>
        <div>
          {elementSelect == 0 ? (
            <>
              <ParaTi />
            </>
          ) : null}
          {elementSelect == 1 ? (
            <>
              <UniversidadIcesi />
            </>
          ) : null}
          {elementSelect == 2 ? (
            <>
              <Ceaf />
            </>
          ) : null}
          {elementSelect == 3 ? (
            <>
              <SemilleroCeaf />
            </>
          ) : null}
          {elementSelect == 4 ? (
            <>
              <Uramba />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Ofertas;
