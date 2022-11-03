import { useContext, useEffect, useState } from "react";
import { findCategory } from "../../utils/utils";
import { StyledItem } from "../styles/Item.styled";
import Error from "../Error/index";
import { AppContextInterface, CartContext } from "../../contexts/context";

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
  const [disabled, setDisabled] = useState(false);
  const { cart, setCart } = useContext<AppContextInterface>(CartContext);

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

  const handleAddToCart = () => {
    setDisabled(true);
    if (!cart.map((e: any) => e.id).includes(item.sku)) {
      setCart([
        ...cart,
        {
          id: item.sku,
          name: name,
          image: item.image,
          price: item.regularPrice,
          quantity: 1,
        },
      ]);
    }
  };

  console.log(cart, "cart");
  return (
    <>
      {item.regularPrice === 0 ? (
        <Error />
      ) : (
        <StyledItem>
          <h2 className="item-title">{name}</h2>
          <img className="item-image" src={item.image} alt={name} />
          <h3 className="description-header">Product Description:</h3>
          <p className="description-text">{item.longDescription}</p>
          <p className="sku">SKU: {item.sku}</p>
          <h3 className="item-price">${item.regularPrice}</h3>
          <button
            className="add-to-cart"
            disabled={disabled}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </StyledItem>
      )}
    </>
  );
};

export default Item;
