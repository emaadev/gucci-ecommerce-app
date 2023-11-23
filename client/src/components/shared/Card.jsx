import { Link } from "react-router-dom";

import "../styles/Card.scss";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}

          <img src={item.img} className="mainImg" alt="" />
          <img src={item.img2} className="detailsImg" alt="" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.newPrice}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
