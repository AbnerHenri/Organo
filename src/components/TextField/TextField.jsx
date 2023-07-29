import "./TextField.css";

export const TextField = ({
  label,
  placeholder,
  required,
  value,
  enteredValue,
}) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        onChange={(e) => enteredValue(e.target.value)}
        value={value}
        required={required}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
