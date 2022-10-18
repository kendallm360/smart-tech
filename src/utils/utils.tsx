import { fetchCategory } from "./apicalls";

const findCategory = (id: any) => {
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

export { findCategory };
