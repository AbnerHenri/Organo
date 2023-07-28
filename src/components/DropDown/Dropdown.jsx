import "./Dropdown.css";

export const Dropdown = ({ label, items }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select>
        {items.map((e) => {
          return <option key={e}>{e}</option>;
        })}
      </select>
    </div>
  );
};
