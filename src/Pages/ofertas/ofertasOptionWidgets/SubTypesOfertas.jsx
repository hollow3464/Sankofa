import { CardBanner3 } from "../../../Components/Card/Card"
import { useEffect, useState } from "react";
import './subTypeOfertas.css'

function SubTypesOfertas() {
    const [datos, setDatos] = useState(null);

  useEffect(() => {
    // Obtener datos del localStorage al cargar la pantalla
    const datosGuardados = localStorage.getItem('datosEvento');
    if (datosGuardados) {
      setDatos(JSON.parse(datosGuardados));

      // Limpiar el localStorage para que los datos no persistan en futuras visitas
      localStorage.removeItem('datosEvento');
    }
  }, []);

  return (
    <>
        <div className="other-ofertas">
            <CardBanner3
                imagebg={datos ? datos.imagebg : null}
                title={datos ? datos.title : null}
                text1={datos ? datos.text1 : null}
                text2={datos ? datos.text2 : null}
                text3={datos ? datos.text3 : null}
                text4={datos ? datos.text4 : null}
                text5={datos ? datos.text5 : null}
                text6={datos ? datos.text6 : null}
                routeBack={datos ? datos.routeBack : null}
            />
        </div>
    </>
  )
}

export default SubTypesOfertas