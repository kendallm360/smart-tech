import { useContext, useEffect, useState } from "react";
import { currencyFormatter, findCategory } from "../../utils/utils";
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
    modelNumber: string;
    regularPrice: number;
    sku: number;
  }>({
    image: "",
    longDescription: "",
    modelNumber: "",
    regularPrice: 0,
    sku: 0,
  });
  const [disabled, setDisabled] = useState(false);
  const { cart, setCart } = useContext<AppContextInterface>(CartContext);

  useEffect(() => {
    findCategory(id)?.then((data) => {
      setItem(data.products.find((product: TItem) => product.name === name));
    });
  }, []);

  const handleAddToCart = () => {
    setDisabled(true);
    !cart.map((e: any) => e.id).includes(item.sku) &&
      setCart([
        ...cart,
        {
          id: item.sku,
          name: name,
          image: item.image,
          price: item.regularPrice,
          quantity: 1,
          category: id,
          modelNumber: item.modelNumber,
        },
      ]);
  };

  return (
    <>
      {item.regularPrice === 0 ? (
        <Error />
      ) : (
        <StyledItem>
          <h2 data-cy="item-title" className="item-title">
            {name}
          </h2>
          <div className="additional-item-info">
            <h3 className="item-label">
              Model: <span className="item-span">{item.modelNumber}</span>
            </h3>
            <h3 data-cy="item-sku" className="item-label">
              SKU: <span className="item-span">{item.sku}</span>
            </h3>
          </div>
          <img
            data-cy="item-image"
            className="item-image"
            src={item.image}
            alt={name}
          />
          <h3 className="description-header">Product Description:</h3>
          <p data-cy="item-description" className="description-text">
            {item.longDescription}
          </p>
          <h3 data-cy="item-price" className="item-price">
            {currencyFormatter.format(item.regularPrice)}
          </h3>
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
