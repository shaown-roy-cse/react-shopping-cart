export function useCartTotal(cart) {
  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  return {
    totalItems,
    totalPrice,
  };
}