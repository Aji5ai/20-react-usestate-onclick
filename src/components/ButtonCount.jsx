// le but de ce composant est d'afficher un bouton. Il n'a donc pas besoin de définir les fonctions qu'il va déclencher (d'addition, soustraction ou reset) mais juste d'y faire appel.
export default function ButtonCount(props) {
  const {label, functionEffect} = props; // récupère les paramètres/props entrés dans App.jsx à l'appel du bouton. par ex : label = "+1" et en functionEffect le nom de la fonction pour reset : handleReset.
  const value = parseInt(label); // transforme la valeur du label (+1, -5...) en integer. Comme ça pas besoin de mettre un troisieme props pour la value.
  return (
    /* Au clic, le bouton lance une fonction anonyme qui a pour paramètre event, et qui lance la fonction entrée en props avec comme paramètres event et la value. Value = le label entré en props lors de l'appel de Button dans App.jsx */
    <button
      type="button"
      onClick={(event) => functionEffect(event, value)}
      className="button-btnStyle">
      {label}{" "}
      {/* Affiche +1, -5.. selon ce qui est entré comme valeur du props dans App.jsx */}
    </button>
  );
}
