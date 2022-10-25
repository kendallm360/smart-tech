import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory, Item } from "../../utils/Types";
import { findCategory } from "../../utils/utils";
import { StyledCategory } from "../styles/Category.styled";

export type TCartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number;
};

const Category = ({ id }: ICategory): JSX.Element => {
  const [title, setTitle] = useState("");
  const [itemList, setItemList] = useState([]);
  const [cart, setCart] = useState([] as TCartItem[]);

  useEffect(() => {
    setTitle(id);
    findCategory(id)?.then((data) => {
      setItemList(data.products);
    });
  }, []);

  // handleAddToCart = (item: Item) => {};
  const handleAddToCart = (item: Item) => {
    console.log(item.name);
  };

  let allItems = itemList.map((item: Item) => {
    return (
      <div data-cy="item-card" className="item-card">
        <Link key={item.sku} to={`/${id}/${item.name}`}>
          <div className="item-info">
            <img className="item-image" src={item.image} />
            <h2>{item.name}</h2>
          </div>
        </Link>
        <div className="price-cart">
          <h3>{item.regularPrice}</h3>
          <button className="cart-button" onClick={() => handleAddToCart(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <StyledCategory>
      <h2 data-cy="category-header">{title.split("_").join(" ")}</h2>
      {allItems}
    </StyledCategory>
  );
};

export default Category;
