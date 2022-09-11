import ListElement from "../ListElement/ListElement";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

type Props = {
  category: string;
  amount: number;
  products: {
    product: string;
    amount: number;
  }[];
};

const Card: React.FC<Props> = ({ category, amount, products }) => {
  return (
    <div className="w-11/12 sm:w-64 bg-gray-chalk hover:bg-white hover:shadow-gray-400 hover:shadow-xl ease-in duration-300 rounded-lg overflow-hidden">
      <Link to={category}>
        <div className="relative">
          <img
            className="h-32 w-full object-cover"
            src={require(`assets/images/category/${category}.jpg`)}
            alt={category}
          />
          <div className="absolute w-full h-full bg-dark-blue opacity-40 top-0 left-0"></div>
          <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-xl font-bold capitalize">{category}</h3>
            <p className="text-sm">({amount})</p>
          </div>
        </div>
      </Link>
      <ul className="px-5 py-3 ">
        {products.map(({ amount, product }) => (
          <ListElement
            amount={amount}
            product={product}
            category={category}
            key={nanoid()}
          />
        ))}
      </ul>
    </div>
  );
};

export default Card;
