import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-[300px] flex items-center flex-col mb-10 mt-[60px] border border-[#464646] rounded-[8px] p-[20px]">
      <p>{product.title}</p>
      <img src={product.image} alt="img" className="w-[150px]" />
      <p className="font-bold text-yellow-600">{product.price} USD</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails && (
        <div>
          <p>{product.description}</p>
        </div>
      )}
      <p>Rating: {product?.rating?.rate}</p>
    </div>
  );
};
