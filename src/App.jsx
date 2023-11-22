import {useState} from "react";
import MainCounter from "./components/MainCounter.jsx";
import ButtonCount from "./components/ButtonCount.jsx";
import "./App.css";

function App() {
  const [countRunners, setCountRunners] = useState(0); // bien que const empêche la réassignation de l'ensemble [countRunners, setCountRunners], cela n'empêche pas la modification de la valeur interne de l'état (countRunners) en utilisant la fonction setCountRunners.

  const handleCount = (event, param) => {
    //Cette fonction est passée en tant que functionEffect au composant Button (ButtonCount.jsx). event n'est pas utilisé mais est quand même essentiel car utilisé dans ButtonCount pour gérer l'évenement.
    setCountRunners(Math.max(0, countRunners + param)); // Math.max retourne le chiffre le plus élevé entre 0 et le compteur. Donc si le compteur est négatif ça retournera 0. param prendre la valeur du label (en integer) lors de l'appel plus bas.
  };
  const handleReset = () => {
    setCountRunners(0); // Fonction pour remettre à 0 l'état du compteur.
  };

  return (
    <>
      {" "}
      {/* Ne pas oublier ces <> ou alors tout mettre dans une div/conteneur */}
      <h1>Marathon de la ville</h1>
      <div className="card">
        <MainCounter countRunners={countRunners} />{" "}
        {/* On appelle le composant avec comme valeur de props celle de countRunners (calculée plus haut par les fonctions quand elles sont appelées par ButtonCount) */}
        <div className="app_buttonsAddRemove">
          {/* 4 boutons pour ajouter ou soustraire au compteur */}
          <ButtonCount label="+5" functionEffect={handleCount} />{" "}
          {/* La valeur du label sera la valeur ajoutée au compteur */}
          <ButtonCount label="+1" functionEffect={handleCount} />{" "}
          {/* handleCount est passée en props à ButtonCount en onclick, elle change ici dans App.jsx le compteur */}
          <ButtonCount label="-1" functionEffect={handleCount} />
          <ButtonCount label="-5" functionEffect={handleCount} />
        </div>
        <h3>Attention, pour remettre à 0 le compteur :</h3>
        <ButtonCount label="Reset" functionEffect={handleReset} />
      </div>
    </>
  );
}

export default App;
