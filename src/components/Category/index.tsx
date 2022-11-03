import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findCategory, findItemBySku } from "../../utils/utils";
import { StyledCategory } from "../styles/Category.styled";
import Error from "../Error/index";
import { AppContextInterface, CartContext } from "../../contexts/context";

interface ICategory {
  id: string;
}

export type Item = {
  id: number;
  image: string;
  name: string;
  regularPrice: string;
  sku: number;
};
const Category = ({ id }: ICategory): JSX.Element => {
  const [title, setTitle] = useState("");
  const [itemList, setItemList] = useState([]);
  const [select, setSelect] = useState("high" || "low");
  const [sorted, setSorted] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [item, setItem] = useState({});
  const { cart, setCart } = useContext<AppContextInterface>(CartContext);

  useEffect(() => {
    setTitle(id);
    findCategory(id)?.then((data) => {
      setItemList(data.products);
    });
  }, []);

  //convert from any below
  const handleSelect = (event: any) => {
    const target = event.target as HTMLInputElement;
    setSelect(target.value);
    if (target.value === "") {
      return allItems;
    }
    if (target.value === "low") {
      setSorted(
        itemList.sort(
          (a: any, b: any) =>
            parseInt(a.regularPrice.toFixed(2)) -
            parseInt(b.regularPrice.toFixed(2))
        )
      );
    }
    if (target.value === "high") {
      setSorted(
        itemList.sort(
          (a: any, b: any) =>
            parseInt(b.regularPrice.toFixed(2)) -
            parseInt(a.regularPrice.toFixed(2))
        )
      );
    }
    //no worky for some reason
    // if (target.value === "new") {
    //   setSorted(
    //     itemList
    //       .sort((a: any, b: any) => b.startDate - a.startDate)
    //       .splice(0, 10)
    //   );
    // }
  };

  const handleAddToCart = (event: any) => {
    // let buttonName = event.target.className.split(" ")[1];
    let sku = event.target.value;
    let item = findItemBySku(sku, itemList);
    // console.log(item.sku, "<<<");
    // let value = event?.target.value;
    // setItem(findItemBySku(value, itemList));
    // console.log(findItemBySku(value, itemList), "<<<");
    // console.log(item, "item");
    // setDisabled(true);
    // console.log(item, "item");
    // buttonName === sku && setDisabled(true);
    if (!cart.map((e: any) => e.id).includes(parseInt(sku))) {
      setCart([
        ...cart,
        {
          id: item.sku,
          name: item.name,
          image: item.image,
          price: parseInt(item.regularPrice),
          quantity: 1,
        },
      ]);
    }
    // setItemList(itemList.filter((e: any) => e.sku !== sku));
    // setItemList(itemList.filter((e: any) => e.id))
    // console.log(cart);
  };

  let allItems = itemList.map((item: Item) => {
    return (
      <div
        key={item.sku}
        id={item.regularPrice}
        data-cy="item-card"
        className="item-card"
      >
        <img className="item-image" src={item.image} />
        <Link to={`/${id}/${item.name}`}>
          <h2 className="item-name" data-cy="name">
            {item.name}
          </h2>
        </Link>
        <div className="price-cart">
          <h3 className="item-price" data-cy="price">
            ${parseInt(item.regularPrice).toFixed(2)}
          </h3>
          <button
            value={item.sku}
            className={`cart-button ${item.sku}`}
            disabled={disabled}
            onClick={handleAddToCart}
            // onClick={() => {
            //   cart.push({
            //     id: item.sku,
            //     name: item.name,
            //     image: item.image,
            //     price: parseInt(item.regularPrice),
            //     quantity: 1,
            //   });
            // }}
            //old attempts
            // console.log(cart, "cart");
            // console.log(
            //   cart.includes({
            //     id: item.sku,
            //     name: item.name,
            //     image: item.image,
            //     price: parseInt(item.regularPrice),
            //     quantity: 1,
            //   }),
            //   "bool"
            // );
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      {itemList.length === 0 ? (
        <Error />
      ) : (
        <StyledCategory>
          <h2 className="header" data-cy="category-header">
            {title.split("_").join(" ")}
          </h2>
          <select defaultValue={""} onChange={handleSelect}>
            <option value="">--Sort By Feature--</option>
            <option value="high">Price High to Low</option>
            <option value="low">Price Low to High</option>
            {/* <option value="new">New Arrivals</option> */}
          </select>
          {allItems}
        </StyledCategory>
      )}
    </>
  );
};

export default Category;
