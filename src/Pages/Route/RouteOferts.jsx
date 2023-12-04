import { Card } from "../../Components/Card/Card";

export default function RouteOferts() {
  return (
    <div className="route-oferts-container">
      <Card
        title={"Política de igualdad de Trato"}
        text={
          "La política de igualdad de trato tiene como objetivo brindar una atención especial  y apoyo dentro de la población institucional como por ejemplo a jóvenes afrodescendientes, raizales y palenqueros. "
        }
        colorbg={"#FFF"}
        colortext={"#000"}
        textButton={"Conoce más sobre la política"}
      />
      <Card
        title={"Ruta de Igualdad de Trato"}
        text={
          "Si alguna vez te has sentido vulnerado o discriminado en nuestro campus universitario, te alentamos a que no dudes en utilizar la ruta de igualdad de trato."
        }
        colorbg={"#D24040"}
        colortext={"#fff"}
        textButton={"Activar"}
        linkTo={"/home/Ruta/Ofertas/Form"}
      />
    </div>
  );
}
