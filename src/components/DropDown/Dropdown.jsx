import "./Dropdown.css";

export const Dropdown = ({ label, items, value, enteredValue }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select value={value} onChange={(e) => enteredValue(e.target.value)}>
        {items.map((e) => {
          return <option key={e}>{e}</option>;
        })}
      </select>
    </div>
  );
};
