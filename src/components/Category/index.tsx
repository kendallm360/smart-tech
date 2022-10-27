import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory, Item } from "../../utils/Types";
import { findCategory } from "../../utils/utils";
import { StyledCategory } from "../styles/Category.styled";
import { CartContext } from "../../context/CartContext";
import Error from "../Error/index";
// export type TCartItem = {
//   name: string;
//   image: string;
//   price: number;
//   amount: number;
// };

const Category = ({ id }: ICategory): JSX.Element => {
  const [title, setTitle] = useState("");
  const [itemList, setItemList] = useState([]);
  const [select, setSelect] = useState("high" || "low");
  const [sorted, setSorted] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  // const [cart, setCart] = useState([] as TCartItem[]);

  useEffect(() => {
    setTitle(id);
    findCategory(id)?.then((data) => {
      setItemList(data.products);
    });
  }, []);

  //need to convert from use of any below
  // const handleAddToCart = (item: any) => {
  //   setCart((prev) => {
  //     //failed error handling logic below
  //     // const itemIsInCart = prev.find((p) => p.name === item.name);
  //     // if (itemIsInCart) {
  //     //   item.amount++;
  //     // }
  //     // if (!itemIsInCart) {
  //     //   return [...prev, item];
  //     // }
  //     return [...prev, item];
  //   });
  //   console.log(cart);
  //   // <Cart cartItems={cart} />;
  // };

  let allItems = itemList.map((item: Item) => {
    return (
      <div
        key={item.sku}
        id={item.regularPrice}
        data-cy="item-card"
        className="item-card"
      >
        <Link to={`/${id}/${item.name}`}>
          <div data-cy="item-info" className="item-info">
            <img className="item-image" src={item.image} />
            <h2>{item.name}</h2>
          </div>
        </Link>
        <div className="price-cart">
          <h3>{item.regularPrice}</h3>
          <button className="cart-button" onClick={() => setCart()}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  // const seeCart = () => {
  //   console.log(cart);
  // };

  //convert from any below
  const handleSelect = (event: any) => {
    const target = event.target as HTMLInputElement;
    setSelect(target.value);
  };

  const handleSort = () => {
    if (select === "low") {
      setSorted(
        itemList.sort((a: any, b: any) => a.regularPrice - b.regularPrice)
      );
    }
    // if (select === "high") {
    //   setSorted(
    //     itemList.sort((a: any, b: any) => b.regularPrice - a.regularPrice)
    //   );
    // }
    return sorted;
  };

  // console.log(sorted);
  return (
    <>
      {itemList.length === 0 ? (
        <Error />
      ) : (
        <StyledCategory>
          {/* <button onClick={seeCart}>test</button> */}
          <h2 data-cy="category-header">{title.split("_").join(" ")}</h2>
          <select value={select} onChange={handleSelect}>
            <option value="high">Price High to Low</option>
            <option value="low">Price Low to High</option>
            {/* <option>Price High to Low</option>
            <option>Price High to Low</option> */}
          </select>
          <button data-cy="sort" className="sort" onClick={handleSort}>
            Sort
          </button>
          {allItems}
          {/* {sorted.length === 0 ? allItems : sorted} */}
          {/* {select === "" ? allItems : sorted} */}
          {/* {select === "" && allItems} */}
        </StyledCategory>
      )}
    </>
  );
};

export default Category;
