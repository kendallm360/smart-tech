import { useEffect, useState } from "react";
import { findCategory } from "../../utils/utils";
import { StyledCategory } from "../../components/styles/Category.styled";
import Error from "../../components/Error/index";
import CategoryElement from "../../components/CategoryElement";

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
  const [select, setSelect] = useState("high" || "low" || "new");
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    setTitle(id);
    const fetchData = async () => {
      const data = await findCategory(id);
      setItemList(data.products);
    };
    fetchData();
  }, []);

  const handleSelect = (event: any) => {
    const target = event.target as HTMLInputElement;
    setSelect(target.value);
    switch (target.value) {
      case "":
        return allItems;
      case "low":
        return setSorted(
          itemList.sort(
            (a: any, b: any) =>
              parseInt(a.regularPrice.toFixed(2)) -
              parseInt(b.regularPrice.toFixed(2))
          )
        );
      case "high":
        return setSorted(
          itemList.sort(
            (a: any, b: any) =>
              parseInt(b.regularPrice.toFixed(2)) -
              parseInt(a.regularPrice.toFixed(2))
          )
        );
      case "new":
        return setSorted(
          itemList.sort(
            (a: any, b: any) =>
              parseInt(b.startDate.split("-").join("")) -
              parseInt(a.startDate.split("-").join(""))
          )
        );
    }
  };

  const allItems = itemList
    .filter((item: Item) => !item.name.includes("/"))
    .map((item: Item) => {
      return (
        <CategoryElement
          key={item.sku}
          itemList={itemList}
          item={item}
          id={id}
        />
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
          <div className="category-info">
            <h3 className="item-total">{allItems.length} items</h3>
            <select
              data-cy="sort-dropdown"
              className="sort-dropdown"
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
