import LosAngeles from "../../../assets/images/cities/01.jpg";
import SanFrancisco from "../../../assets/images/cities/02.jpg";
import California from "../../../assets/images/cities/03.jpg";
import NewYork from "../../../assets/images/cities/04.jpg";
import Manhattan from "../../../assets/images/cities/05.jpg";
import Baltimore from "../../../assets/images/cities/06.jpg";
interface ICities {
  city: string;
  ads: number;
  image: string;
  span: string;
}

export const citiesContent: ICities[] = [
  {
    city: "Los Angeles",
    ads: 25,
    image: LosAngeles,
    span: "",
  },
  {
    city: "San Francisco",
    ads: 45,
    image: SanFrancisco,
    span: "",
  },
  {
    city: "California",
    ads: 32,
    image: California,
    span: "lg:col-span-2",
  },
  {
    city: "New York",
    ads: 100,
    image: NewYork,
    span: "lg:col-span-2",
  },
  {
    city: "Manhattan",
    ads: 76,
    image: Manhattan,
    span: "",
  },
  {
    city: "Baltimore",
    ads: 80,
    image: Baltimore,
    span: "",
  },
];
