import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

type Props = {
  product: string;
  category: string;
  amount: number;
};

const ListElement: React.FC<Props> = ({ category, product, amount }) => {
  return (
    <li
      className="border-gray-mercury border-b-[1px] last:border-b-0 text-black-heading group"
      key={nanoid()}
    >
      <Link className="py-2 flex justify-between" to={`${category}/${product}`}>
        <h5 className="text-base font-medium group-hover:text-dark-blue capitalize">
          {product}
        </h5>
        <p className="text-sm">({amount})</p>
      </Link>
    </li>
  );
};

export default ListElement;
