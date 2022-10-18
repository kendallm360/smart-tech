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

  let allItems = itemList.map((item: any) => {
    return (
      <div className="item-card">
        <img src={item.image} />
        <h2>{item.name}</h2>
        <h3>{item.regularPrice}</h3>
        <button>Add to Cart</button>
      </div>
    );
  });

  return (
    <>
      <h2>{title}</h2>
      {allItems}
    </>
  );
};

export default Category;
