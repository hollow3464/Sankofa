import { useLocation } from "react-router-dom";
import Ceaf from "./eventOptions/Ceaf";
import ParaTi from "./eventOptions/ParaTi";
import SemilleroCeaf from "./eventOptions/SemilleroCeaf";
import UniversidadIcesi from "./eventOptions/UniversidadIcesi";
import Uramba from "./eventOptions/Uramba";
import "./events.css";
import { useState } from "react";

function Events() {
    let { search } = useLocation();
    let query = new URLSearchParams(search);
    let selectedItem = query.get("selected");
    const [elementSelect, setElementSelect] = useState(
        selectedItem ? selectedItem : 0
    );
    const changeSelect = (sel) => {
        setElementSelect(sel);
    };
    return (
        <>
            <section className="events-container">
                <div className="events-perfil">{sessionStorage.getItem("avatar")}</div>
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
            </section>
        </>
    );
}

export default Events;
