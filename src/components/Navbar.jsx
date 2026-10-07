import { useCart } from "../context/useCart";

function Navbar({ search, setSearch }) {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        MyShop
      </div>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="navbar-cart">
        🛒 Cart
        <span>{totalItems}</span>
      </div>
    </nav>
  );
}

export default Navbar;
