import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory, Item } from "../../utils/Types";
import { findCategory } from "../../utils/utils";
import cartImage from "../../images/empty-cart.png";
import Cart from "../Cart";
import { StyledCategory } from "../styles/Category.styled";

export type TCartItem = {
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

  //need to convert from use of any below
  const handleAddToCart = (item: any) => {
    setCart((prev) => {
      //failed error handling logic below
      // const itemIsInCart = prev.find((p) => p.name === item.name);
      // if (itemIsInCart) {
      //   item.amount++;
      // }
      // if (!itemIsInCart) {
      //   return [...prev, item];
      // }
      return [...prev, item];
    });
    console.log(cart);
    // <Cart cartItems={cart} />;
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
      {/* <Link to="/cart">
        <div> */}
      <h2 data-cy="category-header">{title.split("_").join(" ")}</h2>
      {/* <img
            data-cy="cart-logo"
            className="cart"
            src={cartImage}
            alt="cart emoji"
          />
        </div>
      </Link> */}
      {allItems}
    </StyledCategory>
  );
};

export default Category;
