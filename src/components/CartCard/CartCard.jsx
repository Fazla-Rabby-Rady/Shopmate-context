

import { useActionData } from 'react-router-dom'
import style from './CartCard.module.css'
import { useCart } from '../../context/CartContext'

export const CartCard = ({product}) => {
  const { removeFromCart } = useCart();
  const {name,price,image} = product

  return (
    <>
      <div className={style.card}>
        <img src={image} alt="" />
        <p className={style.name}>{name}</p>
        <p className={style.price}>${price}</p>
        <button onClick={() => removeFromCart(product)}>Remove</button>
      </div>  
    </>
  )
}
