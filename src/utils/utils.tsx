import { fetchCategory } from "./apicalls";

export type TCategories =
  | "Cellphones"
  | "Desktops"
  | "Digital_Cameras"
  | "Headphones"
  | "Laptops"
  | "Refrigerators"
  | "Tablets"
  | "TVs"
  | "Washers_and_Dryers"
  // only works if i also add the line below
  | string;

const findCategory = (id: TCategories) => {
  if (id === "Cellphones") {
    return fetchCategory("pcmcat209400050001");
  }
  if (id === "Desktops") {
    return fetchCategory("abcat0501000");
  }
  if (id === "Digital_Cameras") {
    return fetchCategory("abcat0401000");
  }
  if (id === "Headphones") {
    return fetchCategory("abcat0204000");
  }
  if (id === "Laptops") {
    return fetchCategory("abcat0502000");
  }
  if (id === "Refrigerators") {
    return fetchCategory("abcat0901000");
  }
  if (id === "Tablets") {
    return fetchCategory("pcmcat209000050006");
  }
  if (id === "TVs") {
    return fetchCategory("abcat0101000");
  }
  if (id === "Washers_and_Dryers") {
    return fetchCategory("abcat0910000");
  }
};

const addToCart = (item: object) => {
  let cart = [];
  cart.push(item);
  return cart;
};

export { findCategory, addToCart };
