import { useState } from "react";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <h1>My Shopping Cart</h1>

      <div className="category-buttons">
        <button
          className={category === "All" ? "active" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={category === "Electronics" ? "active" : ""}
          onClick={() => setCategory("Electronics")}
        >
          Electronics
        </button>

        <button
          className={category === "Shoes" ? "active" : ""}
          onClick={() => setCategory("Shoes")}
        >
          Shoes
        </button>

        <button
          className={category === "Bags" ? "active" : ""}
          onClick={() => setCategory("Bags")}
        >
          Bags
        </button>

        <button
          className={category === "Fashion" ? "active" : ""}
          onClick={() => setCategory("Fashion")}
        >
          Fashion
        </button>

        <button
          className={category === "Home" ? "active" : ""}
          onClick={() => setCategory("Home")}
        >
          Home
        </button>

        <button
          className={category === "Accessories" ? "active" : ""}
          onClick={() => setCategory("Accessories")}
        >
          Accessories
        </button>
      </div>

      <ProductGrid
        search={search}
        category={category}
        onProductClick={setSelectedProduct}
      />

      <Cart />

      <Footer />
    </div>
  );
}

export default App;