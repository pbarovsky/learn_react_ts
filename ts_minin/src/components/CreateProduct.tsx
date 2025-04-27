import { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { Error } from "./Error";

const productData: IProduct = {
  title: "",
  description: "",
  image: "sss",
  category: "",
  rating: { 
    rate: 0, 
    count: 0 
  },
  price: 29.99,
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();

    if (value.trim().length === 0) {
      setError("Please enter name of product");
      return;
    }

    productData.title = value;
    const res = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    
    onCreate(res.data);    
  };

  const ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="border h-[30px] mr-[10px]"
        type="text"
        placeholder="Enter product name"
        value={value}
        onChange={ChangeHandler}
      />
      {error && <Error error={error} />}
      <button className="text-yellow-500" type="submit">
        Add
      </button>
    </form>
  );
};
