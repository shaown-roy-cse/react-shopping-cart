import { useCart } from "../context/CartContext";
import { useCartTotal } from "../hooks/useCartTotal";

function Cart() {
  const { cart, setCart } = useCart();

  const { totalItems, totalPrice } = useCartTotal(cart);

  function increaseQuantity(index) {
    const newCart = [...cart];

    newCart[index].quantity += 1;

    setCart(newCart);
  }

  function decreaseQuantity(index) {
    const newCart = [...cart];

    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;

      setCart(newCart);
    }
  }

  function removeFromCart(index) {
    const newCart = cart.filter((_, i) => i !== index);

    setCart(newCart);
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      <p>Total Items: {totalItems}</p>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <div className="cart-item" key={product.id}>
              <h3>{product.title}</h3>

              <p>Price: ${product.price}</p>

              <div>
                <button onClick={() => decreaseQuantity(index)}>
                  -
                </button>

                <span> {product.quantity} </span>

                <button onClick={() => increaseQuantity(index)}>
                  +
                </button>
              </div>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total Price: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;