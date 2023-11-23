import Card from "./Card";
import "../styles/FeaturedProducts.scss";

import Product1 from "/assets/product-1.jpg";
import Product1_2 from "/assets/product-1-2.jpg";
import Product2 from "/assets/product-2.jpg";
import Product3 from "/assets/product-3.jpg";
import Product4 from "/assets/product-4.jpg";

const FeaturedProducts = ({ type }) => {
  const products = [
    {
      id: "1",
      img: Product1,
      img2: Product1_2,
      title: "RETRO TWEED JACKET WITH EMBROIDERY",
      isNew: true,
      oldPrice: 2099,
      newPrice: 1820,
    },
    {
      id: "2",
      img: Product2,
      title: "SILK BELT CHECK PRINT DRESS",
      isNew: true,
      oldPrice: 2099,
      newPrice: 1820,
    },
    {
      id: "3",
      img: Product3,
      title: "CHECK COTTON LINEN FORMAL JACKET",
      isNew: false,
      oldPrice: 2099,
      newPrice: 1820,
    },
    {
      id: "4",
      img: Product4,
      title: "GG LINEN JACQUARD DRESS",
      isNew: false,
      oldPrice: 2099,
      newPrice: 1820,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h2>{type}</h2>
        <p>
          Simple encounters full of emotion come to the fore in the House's
          holiday campaign envisioned by Creative Director Sabato De Sarno.
        </p>
      </div>

      <div className="bottom">
        {products.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
