import { useEffect } from "react";
import { fetchCategory } from "../../utils/apicalls";

const Category = ({ id }: any) => {
  useEffect(() => {
    fetchCategory("pcmcat209400050001").then((data) =>
      console.log(data.products)
    );
  });
  return (
    <>
      <h2>Category title here</h2>
    </>
  );
};

export default Category;
