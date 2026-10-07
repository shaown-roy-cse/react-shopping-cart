import { useCart } from "../context/CartContext";

function ProductDetails({ product, onBack }) {
  const { cart, setCart } = useCart();

  function addToCart() {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      const newCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  return (
    <div className="product-details">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>

      <img
        src={product.image}
        alt={product.title}
      />

      <div>
        <h2>{product.title}</h2>

        <p>Category: {product.category}</p>

        <h3>${product.price}</h3>

        <button onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;