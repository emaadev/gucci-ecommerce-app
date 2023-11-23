import { Link } from "react-router-dom";

import cat_exclusive from "/assets/cat-exclusive.jpg";
import cat_accesories from "/assets/cat-accesories.jpg";
import cat_dress from "/assets/cat-dress.jpg";
import cat_shoes from "/assets/cat-shoes.jpg";
import cat_suit from "/assets/cat-suit.jpg";
import cat_jewelry from "/assets/cat-jewelry.jpg";

import "../styles/Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src={cat_exclusive} alt="Categories" />
          <button>
            <Link className="link" to="/products/1">
              Exclusive
            </Link>
          </button>
        </div>

        <div className="row">
          <img src={cat_accesories} alt="Categories" />
          <button>
            <Link className="link" to="/products/1">
              Accesories
            </Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <img src={cat_dress} alt="Categories" />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>

      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={cat_shoes} alt="Categories" />
              <button>
                <Link className="link" to="/products/1">
                  Shoes
                </Link>
              </button>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <img src={cat_suit} alt="Categories" />
              <button>
                <Link className="link" to="/products/1">
                  Suits
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <img src={cat_jewelry} alt="Categories" />
          <button>
            <Link className="link" to="/products/1">
              Jewelry
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
