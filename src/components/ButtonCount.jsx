import "./ButtonCount.css";

export default function Button(props) {
  const {label, functionEffect} = props;
  return (
    <button type="button" onClick={functionEffect} className="button-btnStyle">
      {label}
    </button>
  );
}
