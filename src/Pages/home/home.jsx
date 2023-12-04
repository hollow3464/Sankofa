import { CardHome1, CardHome2 } from "../../Components/Card/Card";
import SearchMobile from "../../Components/searchMobile/SearchMobile";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const enviarId = (id) => {
    const nuevaURL = `/home/others/id=${id}`;
    navigate(nuevaURL);
  };
  let datos = sessionStorage.getItem("registerOthersData");
  datos = JSON.parse(datos);
  const nombre = datos.nombre.split(" ")[0];
  return (
    <>
      <div className="home-container">
        <div className="home-content-container">
          <article className="home-title-container">
            <div className="home-perfil">
              {sessionStorage.getItem("avatar")}
            </div>
            <h2>¡Hola! {nombre}</h2>
          </article>
          <div className="cards-home-container">
            <p
              style={{
                width: "85vw",
                fontSize: "14px",
                paddingRight: "1rem",
                fontSize: "0.8rem",
              }}
            >
              Encuentra en la universidad herramientas que enriquecen tu
              experiencia universitaria
            </p>
            <SearchMobile />
            <article className="next-events-home">
              <p>Proximos eventos</p>
              <CardHome1
                LinkTo={"/home/Events/next?selected=2"}
                title1={"CEAF, 10 años"}
                title2={"30 de noviembre "}
                text={"Faltan 1 día(s) para el evento"}
              />
            </article>
          </div>
          <div className="secure-spaces-home">
            <article className="secure-home-content">
              <arguments className="secure-home-div1">
                <h5>Espacios seguros</h5>
                <p style={{ fontSize: "0.6rem" }}>
                  Conoce los espacios étnicos seguro que la universidad Icesi
                  tiene para tí
                </p>
              </arguments>
              <arguments className="secure-home-div2">
                <FaArrowRight
                  style={{ fontSize: "1.5rem", fontWeight: "lighter" }}
                />
              </arguments>
            </article>
            <article className="cards-secure-home">
              <span
                onClick={() => {
                  enviarId(1);
                }}
              >
                <CardHome2
                  title={"Centro de Estudios Afrodiaspóricos"}
                  imagebg={"/assets/images/ceaficesi.png"}
                  image={"/assets/images/baner_ceaf_home.png"}
                />
              </span>
              <span
                onClick={() => {
                  enviarId(2);
                }}
              >
                <CardHome2
                  title={"Grupo estudiantil URAMBA"}
                  imagebg={"/assets/images/urabmba_image.png"}
                  image={"/assets/images/baner_uramba.png"}
                />
              </span>
              <span
                onClick={() => {
                  enviarId(3);
                }}
              >
                <CardHome2
                  title={"Semillero de Estudios Afrodiaspóricos"}
                  imagebg={"/assets/images/semillero_ceaf_image.png"}
                  image={"/assets/images/Semillero_CEAF.png"}
                />
              </span>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
