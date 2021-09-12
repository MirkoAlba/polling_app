export const breakpoint = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const capitalize = ([firstLetter, ...restOfWord]) =>
  firstLetter.toUpperCase() + restOfWord.join("");

export const capitalizeEveryWord = (text) =>
  text
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

//faccio upsert dopo un delay perchè aspetto che aggiorna lo state globale di easy-peasy
export const timeout = (delay) => {
  return new Promise((res) => setTimeout(res, delay));
};

export const getCurrentProductQuantity = (cartItems, id) => {
  const p = cartItems.filter((item) => item.productId === id);
  return p[0]?.quantity;
};
