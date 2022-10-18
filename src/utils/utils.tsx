import { fetchCategory } from "./apicalls";

const findCategory = (id: any) => {
  if (id === "Cellphones") {
    return fetchCategory("pcmcat209400050001");
  }
  if (id === "Desktops") {
    return fetchCategory("abcat0501000");
  }
};

export { findCategory };
