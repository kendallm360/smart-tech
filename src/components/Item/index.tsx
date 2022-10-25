import { useEffect, useState } from "react";
import { ICategory } from "../../utils/Types";
import { findCategory } from "../../utils/utils";
import { StyledItem } from "../styles/Item.styled";
import Error from "../Error/index";

const Item = ({ id, name }: ICategory): JSX.Element => {
  const [item, setItem] = useState<{
    image: string;
    longDescription: string;
    sku: number;
    regularPrice: number;
  }>({
    image: "",
    longDescription: "",
    sku: 0,
    regularPrice: 0,
  });
  // const [error, setError] = useState(false);

  useEffect(() => {
    findCategory(id)?.then((data) => {
      setItem(
        data.products.find((product: ICategory) => product.name === name)
      );
    });
    // .catch(() => {
    //   setError(true);
    // });
  }, []);
  return (
    <>
      {item.regularPrice === 0 ? (
        <Error />
      ) : (
        <StyledItem>
          <img src={item.image} alt={name} />

          <h2>{name}</h2>
          <h3>Product Description</h3>
          <p>{item.longDescription}</p>
          <p>SKU: {item.sku}</p>
          <h3>{item.regularPrice}</h3>
          <button>Add to Cart</button>
        </StyledItem>
      )}
    </>
  );
};

export default Item;
