import { useEffect, useState } from "react";
import { ICategory } from "../../utils/Types";
import { findCategory } from "../../utils/utils";

type TItem = {
  image: string;
  longDescription: string;
  sku: number;
  regularPrice: number;
};

const Item = ({ id, name }: ICategory): JSX.Element => {
  const [item, setItem] = useState<TItem>({});
  //   const [item, setItem] = useState({});

  useEffect(() => {
    findCategory(id)?.then((data) => {
      setItem(
        data.products.find((product: ICategory) => product.name === name)
      );
    });
  }, []);
  return (
    <>
      <img src={item.image} alt={name} />
      {/* Add scroll of alt images here*/}

      <h2>{name}</h2>
      <p>{item.longDescription}</p>
      <p>{item.sku}</p>
      <h3>{item.regularPrice}</h3>
      <button>Add to Cart</button>
      {/* Add scroll of other items here */}
    </>
  );
};

export default Item;
