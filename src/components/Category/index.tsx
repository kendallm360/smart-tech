import { useEffect } from "react";
import { fetchCategory } from "../../utils/apicalls";

const Category = ({ id }: any) => {
  useEffect(() => {
    fetchCategory("abcat0501000").then((data) => console.log(data));
  });
  return (
    <>
      <h2>Category title here</h2>
    </>
  );
};

export default Category;

//desktops = abcat0501000
//phones = pcmcat209400050001
//maybe use product template  or department for id?
