import { useEffect, useState } from "react";
import { Scheduled1, ScheduledReady } from "./Scheduled1";

function PrincipalSchedule() {
  const [datos, setDatos] = useState(null);
  const [setscheduleForm, setSetscheduleForm] = useState(0);

  useEffect(() => {
    // Obtener datos del localStorage al cargar la pantalla
    const datosGuardados = localStorage.getItem("datosEvento");
    if (datosGuardados) {
      setDatos(JSON.parse(datosGuardados));

      // Limpiar el localStorage para que los datos no persistan en futuras visitas
      localStorage.removeItem("datosEvento");
    }
  }, []);

  const scheduleForm = () => {
    setSetscheduleForm(1);
  };

  return (
    <>
      {setscheduleForm == 0 ? (
        <Scheduled1
          scheduleType={datos ? datos.scheduleType : null}
          title={datos ? datos.title : null}
          text1={datos ? datos.text1 : null}
          text2={datos ? datos.text2 : null}
          fecha={datos ? datos.fecha : null}
          lugar={datos ? datos.lugar : null}
          hora={datos ? datos.hora : null}
          toLink={"/home/Events/next"}
          titleSemillero={datos ? datos.titleSemillero : null}
          scheduleForm={scheduleForm}
        />
      ) : (
        <ScheduledReady
          scheduleType={"Semillero CEAF"}
          title={"Transatlánticidad"}
          fecha={"Miércoles, 14 de Noviembre 2023"}
          lugar={"Auditorio Manuelita, Icesi"}
          hora={"Hora: 1:00 P.M. - 7:30 P.M."}
          participantes={10}
        />
      )}
    </>
  );
}

export default PrincipalSchedule;
