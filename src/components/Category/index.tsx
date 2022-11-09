import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  currencyFormatter,
  findCategory,
  findItemBySku,
} from "../../utils/utils";
import { StyledCategory } from "../styles/Category.styled";
import Error from "../Error/index";
import { AppContextInterface, CartContext } from "../../contexts/context";
// import Scrollbar from "../Scrollbar";
import { linkStyle } from "../Categories";

interface ICategory {
  id: string;
}

export type Item = {
  id: number;
  image: string;
  modelNumber: string;
  name: string;
  regularPrice: string;
  sku: number;
};
const Category = ({ id }: ICategory): JSX.Element => {
  const [title, setTitle] = useState("");
  const [itemList, setItemList] = useState([]);
  const [select, setSelect] = useState("high" || "low");
  const [sorted, setSorted] = useState([]);
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
    if (target.value === "new") {
      setSorted(
        itemList.sort(
          (a: any, b: any) =>
            parseInt(b.startDate.split("-").join("")) -
            parseInt(a.startDate.split("-").join(""))
        )
      );
    }
  };

  const handleAddToCart = (event: any) => {
    let sku = event.target.value;
    let item = findItemBySku(sku, itemList);
    if (!cart.map((e: any) => e.id).includes(parseInt(sku))) {
      setCart([
        ...cart,
        {
          id: item.sku,
          name: item.name,
          image: item.image,
          price: parseInt(item.regularPrice),
          quantity: 1,
          category: id,
        },
      ]);
    }
  };

  let allItems = itemList.map((item: Item) => {
    return (
      <div
        key={item.sku}
        id={item.regularPrice}
        data-cy="item-card"
        className="item-card"
      >
        <div className="image-third">
          <Link to={`/${id}/${item.name}`} style={linkStyle}>
            <img className="item-image" src={item.image} alt={item.name} />
          </Link>
        </div>
        <div className="item-info">
          <Link to={`/${id}/${item.name}`} style={linkStyle}>
            <h2 className="item-name" data-cy="item-name">
              {item.name}
            </h2>
          </Link>
          <div className="additional-item-info">
            <Link to={`/${id}/${item.name}`} style={linkStyle}>
              <h3 className="item-label">
                Model:<span className="item-span"> {item.modelNumber}</span>{" "}
              </h3>
            </Link>
            <Link to={`/${id}/${item.name}`} style={linkStyle}>
              <h3 className="item-label">
                SKU:<span className="item-span"> {item.sku}</span>{" "}
              </h3>
            </Link>
          </div>
        </div>
        <div className="price-cart">
          <h3 className="item-price" data-cy="price">
            {currencyFormatter.format(parseInt(item.regularPrice))}
          </h3>
          <button
            data-cy="add-to-cart-button"
            value={item.sku}
            className={`cart-button ${item.sku}`}
            onClick={handleAddToCart}
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
          {/* <Scrollbar /> */}
          <h2 className="header" data-cy="category-header">
            {title.split("_").join(" ")}
          </h2>
          <div className="category-info">
            <h3 className="item-total">{itemList.length} items</h3>
            <select
              data-cy="sort-dropdown"
              defaultValue={""}
              onChange={handleSelect}
            >
              <option value="">--Sort By Feature--</option>
              <option value="high">Price High to Low</option>
              <option value="low">Price Low to High</option>
              <option value="new">New Arrivals</option>
            </select>
          </div>
          {allItems}
        </StyledCategory>
      )}
    </>
  );
};

export default Category;
