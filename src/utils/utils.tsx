import { Item } from "../components/Category";
import { fetchCategory } from "./apicalls";

export type TCategories =
  | "Home_Security"
  | "Desktops"
  | "Digital_Cameras"
  | "Headphones"
  | "Laptops"
  | "Refrigerators"
  | "Tablets"
  | "TVs"
  | "Washers_and_Dryers"
  // only works if i also add the line below ???
  | string;

const findItemBySku = (sku: number, itemList: Item[]) => {
  const item = itemList.filter((item: Item) => item.sku == sku);
  return item[0];
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const findCategory = (id: TCategories) => {
  switch (id) {
    case "Home_Security":
      return fetchCategory("pcmcat254000050002");
    case "Desktops":
      return fetchCategory("abcat0501000");
    case "Digital_Cameras":
      return fetchCategory("abcat0401000");
    case "Headphones":
      return fetchCategory("abcat0204000");
    case "Laptops":
      return fetchCategory("abcat0502000");
    case "Refrigerators":
      return fetchCategory("abcat0901000");
    case "Tablets":
      return fetchCategory("pcmcat209000050006");
    case "TVs":
      return fetchCategory("abcat0101000");
    case "Washers_and_Dryers":
      return fetchCategory("abcat0910000");
  }
};

const addToCart = (item: Item) => {
  const cart = [];
  cart.push(item);
  return cart;
};

export { findCategory, addToCart, findItemBySku, currencyFormatter };
