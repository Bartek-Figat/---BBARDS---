import product1 from "assets/images/product/01.jpg";

export interface IProducts {
  img: string;
  title: string;
  price: number;
  type: string;
  location: string;
  time: string;
}

export const productsMap: IProducts[] = [
  {
    img: product1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 3000,
    type: "Sale",
    location: "Uttara, Dhaka",
    time: "30 min",
  },
  {
    img: product1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 3000,
    type: "Sale",
    location: "Uttara, Dhaka",
    time: "30 min",
  },
  {
    img: product1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 3000,
    type: "Sale",
    location: "Uttara, Dhaka",
    time: "30 min",
  },
  {
    img: product1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 3000,
    type: "Sale",
    location: "Uttara, Dhaka",
    time: "30 min",
  },
];
