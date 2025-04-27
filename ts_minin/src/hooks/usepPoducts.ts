import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../models";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addProduct = (product: IProduct) => {
    setProducts((prev) => [...prev, product]);
  }

  const fetchProducts = async () => {
    try {
      setError("");
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products?limit=5");
      setProducts(res.data);
      setLoading(false);
    } catch (e) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, loading, addProduct };
};
