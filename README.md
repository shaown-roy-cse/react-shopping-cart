# React Shopping Cart

A modern, responsive and functional shopping cart application built with React and Vite.

## Features

- Product catalog with responsive grid layout
- Product image, title, category and price
- Product search
- Category filtering
- Product details page
- Add products to cart
- Increase and decrease product quantity
- Remove products from cart
- Real-time total item count
- Real-time total price calculation
- Cart data saved using Local Storage
- Responsive design for desktop, tablet and mobile
- Reusable React components
- React Context API for global cart state management
- React Hooks including useState and useEffect
- Amazon-style shopping interface

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- React Context API
- React Hooks
- Vite
- Local Storage

## Project Structure

```text
src/
├── components/
│   ├── Cart.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetails.jsx
│   └── ProductGrid.jsx
│
├── context/
│   └── CartContext.jsx
│
├── data/
│   └── products.js
│
├── hooks/
│   └── useCartTotal.js
│
├── App.jsx
├── index.css
└── main.jsx