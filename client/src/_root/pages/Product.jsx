import { useState } from "react";

import "./Product.scss";
import Image1 from "/assets/product-1.jpg";
import Image2 from "/assets/product-1-2.jpg";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Cart from "../../components/shared/Cart";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const images = [Image1, Image2];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Product Title</h1>
        <span className="price">$199 (Price)</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          ex voluptas commodi! Sapiente, dicta.
        </p>
        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((prev) => (quantity === 0 ? 0 : prev - 1))
            }
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}> + </button>
        </div>

        <div className="add">
          <AddShoppingCartIcon /> Add to Cart
        </div>

        <div className="links">
          <div className="item">
            <StarBorderIcon /> Add to Wish List
          </div>
          <div className="item">
            <CompareArrowsIcon /> Add to Compare
          </div>
        </div>

        <div className="info">
          <span>Brand: Polo</span>
          <span>Product Type: Suit</span>
          <span>Tag: Suit, Men, Exclusive</span>
        </div>
        <hr />
        <div className="info">
          <span>Description</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
