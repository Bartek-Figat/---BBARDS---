import product1 from "assets/images/product/01.jpg";

export interface IProducts {
  id: number;
  img: string;
  title: string;
  price: number;
  type: string;
  location: string;
  time: string;
}

export const productsMap: IProducts[] = [
  {
    id: 0,
    img: product1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 3000,
    type: "Sale",
    location: "Uttara, Dhaka",
    time: "30 min",
  },
  {
    id: 1,
    img: product1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 3000,
    type: "Sale",
    location: "Uttara, Dhaka",
    time: "30 min",
  },
  {
    id: 2,
    img: product1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 3000,
    type: "Sale",
    location: "Uttara, Dhaka",
    time: "30 min",
  },
  {
    id: 3,
    img: product1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 3000,
    type: "Sale",
    location: "Uttara, Dhaka",
    time: "30 min",
  },
];
