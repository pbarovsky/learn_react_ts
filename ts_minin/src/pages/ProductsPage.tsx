import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import { Product } from "../components/Product";
import { useProducts } from "../hooks/usepPoducts";
import { Modal } from "../components/Modal";
import { CreateProduct } from "../components/CreateProduct";
import { useContext } from "react";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";

export const ProductsPage = () => {
  const { products, error, loading, addProduct } = useProducts();
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <button className="fixed bottom-5 right-5" onClick={open}>
        +
      </button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {modal && (
        <Modal title="Create product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </>
  );
}