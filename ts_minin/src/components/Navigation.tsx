import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed right-0 top-0 w-full h-[50px] items-center flex gap-[20px] justify-center px-5 bg-gray-500 text-white">
      <Link to="/">Products</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
