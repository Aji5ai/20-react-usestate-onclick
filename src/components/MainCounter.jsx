import "./MainCounter.css";

// le but de ce composant est d'afficher un compteur. Il n'a donc pas besoin de calculer la valeur du compteur car il la reçoit de son composant parent, App.jsx. C'est App.Jsx qui lui fourni countRunners.
export default function MainCounter(props) {
  const {countRunners} = props; // Ne pas oublier de définir ce qui va en props
  return (
    <>
      {" "}
      {/* pour remplacer une div/conteneur on mets ces <></> */}
      <h2>Nombre de participants : </h2>
      <div className="mainCounter_count">{countRunners}</div>{" "}
      {/* Affiche la valeur de countRunners qui est fournie par App.jsx à l'appel du composant */}
    </>
  );
}
