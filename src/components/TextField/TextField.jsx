import "./TextField.css";

export const TextField = ({ label, placeholder }) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};
