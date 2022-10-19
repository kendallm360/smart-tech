import { useEffect, useState } from "react";
import { ICategory, Item } from "../../utils/Types";
import { findCategory } from "../../utils/utils";
import { StyledCategory } from "../styles/Category.styled";

const Category = ({ id }: ICategory): JSX.Element => {
  const [title, setTitle] = useState("");
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setTitle(id);
    findCategory(id)?.then((data) => {
      setItemList(data.products);
    });
  }, []);

  let allItems = itemList.map((item: Item) => {
    return (
      <div className="item-card">
        <img className="item-image" src={item.image} />
        <h2>{item.name}</h2>
        <div className="price-cart">
          <h3>{item.regularPrice}</h3>
          <button className="cart-button">Add to Cart</button>
        </div>
      </div>
    );
  });

  return (
    <StyledCategory>
      <h2>{title.split("_").join(" ")}</h2>
      {allItems}
    </StyledCategory>
  );
};

export default Category;
