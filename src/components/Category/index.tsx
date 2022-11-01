import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findCategory } from "../../utils/utils";
import { StyledCategory } from "../styles/Category.styled";
import Error from "../Error/index";
import { myContext } from "../..";

interface ICategory {
  id: string;
}

type Item = {
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
  const { cart } = useContext(myContext);

  useEffect(() => {
    setTitle(id);
    findCategory(id)?.then((data) => {
      setItemList(data.products);
    });
  }, []);

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
            <h2 className="item-name" data-cy="name">
              {item.name}
            </h2>
          </div>
        </Link>
        <div className="price-cart">
          <h3 data-cy="price">${parseInt(item.regularPrice).toFixed(2)}</h3>
          <button
            className="cart-button"
            onClick={() => {
              cart.push({
                id: item.sku,
                name: item.name,
                image: item.image,
                price: parseInt(item.regularPrice),
                quantity: 1,
              });
            }}
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
