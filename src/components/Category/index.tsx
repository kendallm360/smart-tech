import { useEffect, useState } from "react";
// import { fetchCategory } from "../../utils/apicalls";
import { findCategory } from "../../utils/utils";

const Category = ({ id }: any) => {
  const [title, setTitle] = useState<any>("");
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setTitle(id);
    findCategory(id)?.then((data) => {
      setItemList(data.products);
    });
  }, []);

  console.log(itemList[0], "itemlist");
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

export default Category;
