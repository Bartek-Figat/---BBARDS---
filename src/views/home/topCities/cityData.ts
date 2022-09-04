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
    image: "bg-los-angeles",
    span: "",
  },
  {
    city: "San Francisco",
    ads: 45,
    image: "bg-san-francisco",
    span: "",
  },
  {
    city: "California",
    ads: 32,
    image: "bg-california",
    span: "lg:col-span-2",
  },
  {
    city: "New York",
    ads: 100,
    image: "bg-new-york",
    span: "lg:col-span-2",
  },
  {
    city: "Manhattan",
    ads: 76,
    image: "bg-manhattan",
    span: "",
  },
  {
    city: "Baltimore",
    ads: 80,
    image: "bg-baltimore",
    span: "",
  },
];
