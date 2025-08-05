import { CardProfile } from "../../Components/Card/Card";
import "./profile.css";

function Profile() {
    let datos = sessionStorage.getItem("registerOthersData");
    datos = JSON.parse(datos);
    const nombre = datos?.nombre?.split(" ")[0];
    return (
        <>
            <div className="profile-container">
                <div className="profile-content-container">
                    <div className="avatar-picker">
                        <button className="btn-perfil">
                            {sessionStorage.getItem("avatar")}
                        </button>
                    </div>
                    <div className="colum-profile">
                        <h1>!Hola¡ {nombre}</h1>
                        <div
                            style={{
                                display: "flex",
                                gap: "0.2rem",
                                flexDirection: "row",
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >
                            <span style={{ fontSize: "1rem" }}>⚙️</span>
                            <button
                                style={{
                                    fontSize: "1rem",
                                    color: "white",
                                    border: "none",
                                    backgroundColor: "transparent",
                                }}
                            >
                                Editar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-profile-container">
                    <CardProfile
                        linkTo={"/home/profile/Reports"}
                        textColor={"#000"}
                        title={"Mis Reportes"}
                        text={
                            "Aqui encontraras los reportes que has generado al activar la ruta de igualdad de trato."
                        }
                        color={"#fff"}
                        image={"/assets/images/notas.png"}
                        imgSize={"6rem"}
                    />
                    <CardProfile
                        linkTo={"/Home/MyEvents"}
                        textColor={"#000"}
                        title={"Mis Eventos"}
                        text={
                            "Accede para visualizar los eventos a los que tienes planeado asistir proximamente."
                        }
                        color={"#fff"}
                        image={"/assets/images/calendario_zoom.png"}
                        imgSize={"7rem"}
                    />
                </div>
            </div>
        </>
    );
}

export default Profile;
