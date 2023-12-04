import "./ofertasLog.css";

function OfertasLog({ colorbg, text, colorText }) {
  return (
    <>
      <div className="ofertasLog-container">
        <div className="ofertasLog-images">
          <img
            src="/assets/images/ofertas_log.png"
            alt="building"
            className="building-ofertasLog"
          />
        </div>
        <div
          className="component-polygon-ofetas"
          style={{ backgroundColor: `${colorbg}` }}
        >
          <h3 style={{ fontWeight: 700, color: `${colorText}` }}>{text}</h3>
        </div>
      </div>
    </>
  );
}

export default OfertasLog;
