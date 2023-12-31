import "./Team.css";

import { Card } from "../Card/Card";

export const Team = ({ name, primaryColor, secondColor, collaborators }) => {
  return (
    collaborators.length > 0 && (
      <section className="time" style={{ backgroundColor: secondColor }}>
        <h3 style={{ borderColor: primaryColor }}>{name}</h3>

        <div className="colaboradores">
          {collaborators.map((e) => {
            return (
              <Card
                name={e.name}
                office={e.office}
                img={e.image}
                key={e.name}
                backColor={primaryColor}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
