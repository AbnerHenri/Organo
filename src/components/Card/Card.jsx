import "./Card.css";

export const Card = ({ name, office, img, backColor }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: backColor }}>
        <img src={img} alt="Colaborador" />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  );
};
