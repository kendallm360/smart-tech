import { useContext, useEffect, useState } from "react";
import { findCategory } from "../../utils/utils";
import { StyledItem } from "../styles/Item.styled";
import Error from "../Error/index";
import { myContext } from "../..";

type TItem = {
  id: string;
  name: string;
};

const Item = ({ id, name }: TItem): JSX.Element => {
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
  const { cart } = useContext(myContext);

  useEffect(() => {
    findCategory(id)?.then((data) => {
      setItem(data.products.find((product: TItem) => product.name === name));
    });
    //attempt at async await
    // ?.finally((data) => {
    //   setItem(
    //     data.products.find((product: ICategory) => product.name === name)
    //   );
    // });
  }, []);
  return (
    <>
      {item.regularPrice === 0 ? (
        <Error />
      ) : (
        <StyledItem>
          <h2>{name}</h2>
          <img src={item.image} alt={name} />
          <h3>Product Description:</h3>
          <p>{item.longDescription}</p>
          <p>SKU: {item.sku}</p>
          <h3>${item.regularPrice}</h3>
          <button
            onClick={() => {
              cart.push({
                id: item.sku,
                name: name,
                image: item.image,
                price: item.regularPrice,
                quantity: 1,
              });
              console.log(cart);
            }}
          >
            Add to Cart
          </button>
        </StyledItem>
      )}
    </>
  );
};

export default Item;
