import { useCart } from "../../context/CartContext";
import style from "./Cart.module.css"
import { CartCard } from '../../components/CartCard/CartCard';
import { useTitle } from "../../hooks/useTitle";
export const Cart = () => {
  useTitle("Cart");
  const {total,cartList} = useCart();
  return (
    <>
      <main>
        <section className={style.cart}>
          <h1>Cart Items: {cartList.length} / ${total}</h1>
          {cartList.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </>
  );
}
