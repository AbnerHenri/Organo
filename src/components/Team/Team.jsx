import "./Team.css";

export const Team = ({ name, primaryColor, secondColor }) => {
  return (
    <section className="time" style={{ backgroundColor: secondColor }}>
      <h3 style={{ borderColor: primaryColor }}>{name}</h3>
    </section>
  );
};
