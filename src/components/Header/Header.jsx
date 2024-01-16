import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo.svg";
import style from "./Header.module.css";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
export const Header = () => {
  const { cartList } = useCart();
  return (
    <>
      <header className={style.header}>
        <Link to="/" className={style.logo}>
          <img src={logo} alt="logo" />
          <span>Shop Mate</span>
        </Link>
        <nav className={style.nav}>
          <NavLink
            to="/"
            className={`(isActive) => isActive ? "active" : " "`}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={`(isActive) => isActive ? "active" : " "`}
          >
            Cart
          </NavLink>
        </nav>
        <Link to="/" className={style.card}>
          <AiOutlineShoppingCart />
          <span>{cartList.length}</span>
        </Link>
      </header>
    </>
  );
};
