import { useCart } from "../context/CartContext";

function ProductCard({ product, onProductClick }) {
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
    <div className="product-card">
      <div
        className="product-image"
        onClick={() => onProductClick(product)}
      >
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-info">
        <h2 onClick={() => onProductClick(product)}>
          {product.title}
        </h2>

        <p className="product-category">
          {product.category}
        </p>

        <p className="product-rating">
          ⭐ {product.rating} / 5
        </p>

        <p className="product-price">
          ${product.price}
        </p>

        <button onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;