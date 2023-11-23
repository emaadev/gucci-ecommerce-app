import Product1 from "/assets/product-1-2.jpg";
import Product1_2 from "/assets/product-1-2.jpg";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "../styles/Cart.scss";

const Cart = () => {
  let total = 0;

  const products = [
    {
      id: "1",
      img: Product1,
      img2: Product1_2,
      title: "RETRO TWEED JACKET WITH EMBROIDERY",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, illum.",
      isNew: true,
      oldPrice: 2099,
      newPrice: 1820,
    },
    {
      id: "2",
      img: Product1,
      img2: Product1_2,
      title: "RETRO TWEED JACKET WITH EMBROIDERY",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, illum.",
      isNew: true,
      oldPrice: 2099,
      newPrice: 1820,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in Cart</h1>
      {products.map((item) => {
        total += item.newPrice;

        return (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc.substring(0, 100)}</p>
              <div className="price">1 x ${item.newPrice}</div>
            </div>

            <DeleteOutlineIcon className="delete" />
          </div>
        );
      })}

      <div className="total">
        <span>Subtotal</span>
        <span>${total}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
