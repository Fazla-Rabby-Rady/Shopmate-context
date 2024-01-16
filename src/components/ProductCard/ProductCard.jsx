import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import style from "./ProductCard.module.css"

export const ProductCard = ({product}) => {
  const [isInCart,setIsInCart] = useState(false);
  const { addToCart, removeFromCart, cartList } = useCart();
  const {id,name, price, image} = product

  useEffect(() => {
    const productIsCart = cartList.find((cartItem) => cartItem.id === id)
    if(productIsCart){
      setIsInCart(true)
    }
    else{
      setIsInCart(false)
    }

  },[cartList,id])

  
  return (
    <>
      <div className={style.productCard}>
        <img src={image} alt={name} />
        <p className={style.name}>{name}</p>
        <div className={style.action}>
          <p>${price}</p>
          {isInCart ? (
            <button onClick={() => removeFromCart(product)} className={style.remove}>Remove</button>
          ) : (
            <button onClick={() => addToCart(product)} className={style.add}>Add To Cart</button>
          )}
        </div>
      </div>
    </>
  );
}
