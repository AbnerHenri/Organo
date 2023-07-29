import "./Dropdown.css";

export const Dropdown = ({ label, items, value, enteredValue }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select value={value} onChange={(e) => enteredValue(e.target.value)}>
        <option value={""}></option>
        {items.map((e) => {
          return <option key={e.name}>{e.name}</option>;
        })}
      </select>
    </div>
  );
};
