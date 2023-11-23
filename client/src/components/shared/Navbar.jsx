import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.scss";

import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import Cart from "./Cart";

const NavList = () => {
  return (
    <div className="navList">
      <ul className="left">
        <li className="item">
          <LanguageIcon />
          <ArrowDropDownIcon />
        </li>
        <li className="item">
          <span>USD</span>
          <ArrowDropDownIcon />
        </li>
        <li className="item">
          <Link className="link" to="products/men">
            Men
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="products/women">
            Women
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="products/children">
            Children
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="products/accesories">
            Accesories
          </Link>
        </li>
      </ul>

      <hr />

      <ul className="right">
        <li className="item">
          <Link className="link" to="/">
            Homepage
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/store">
            Store
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openNavList, setOpenNavList] = useState(false);

  return (
    <nav className="navbar">
      <div className="wrapper">
        <ul className="left">
          <li className="item">
            <LanguageIcon />
            <ArrowDropDownIcon />
          </li>
          <li className="item">
            <span>USD</span>
            <ArrowDropDownIcon />
          </li>
          <li className="item">
            <Link className="link" to="products/men">
              Men
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="products/women">
              Women
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="products/children">
              Children
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="products/accesories">
              Accesories
            </Link>
          </li>
        </ul>

        <div className="center">
          <Link className="link brand" to="/">
            GUCCI
          </Link>
        </div>

        <ul className="right">
          <li className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/store">
              Store
            </Link>
          </li>

          <li className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteBorderIcon />

            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </li>

          <button
            className="burgerIcon"
            onClick={() => {
              setOpenNavList(!openNavList);
            }}
          >
            {openNavList ? (
              <CancelIcon className="exitIcon" />
            ) : (
              <MenuIcon className="navIcon" />
            )}
          </button>
        </ul>
      </div>
      {openCart && <Cart />}
      {openNavList && <NavList />}
    </nav>
  );
};

export default Navbar;
