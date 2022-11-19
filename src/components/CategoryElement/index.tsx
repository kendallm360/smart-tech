import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContextInterface, CartContext } from "../../contexts/context";
import { currencyFormatter } from "../../utils/utils";
import { linkStyle } from "../Categories";

const CategoryElement = ({ item, id }: any): JSX.Element => {
  const { cart, setCart } = useContext<AppContextInterface>(CartContext);

  const handleAddToCart = (event: any) => {
    const sku = event.target.value;
    !cart.map((e: any) => e.id).includes(parseInt(sku)) &&
      setCart([
        ...cart,
        {
          id: item.sku,
          name: item.name,
          image: item.image,
          price: parseInt(item.regularPrice),
          quantity: 1,
          category: id,
          modelNumber: item.modelNumber,
        },
      ]);
  };
  return (
    <>
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
    </>
  );
};

export default CategoryElement;
