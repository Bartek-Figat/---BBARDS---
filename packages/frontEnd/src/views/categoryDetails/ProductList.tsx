import { ProductCard } from "views/home/recommended/ProductCard";
import { FC } from "react";

interface Props {
  products: ProductProps[];
}
interface ProductProps {
  _id: string;
  productImages: Array<string>;
  productTitle: string;
  price: number;
  adCategory: string;
  city: string;
}

export const ProductList: FC<Props> = ({ products }) => {
  const mapProducts = () => {
    if (!products) return <p>No products</p>;

    return products.map(
      ({ _id, productImages, productTitle, price, adCategory, city }) => {
        return (
          <ProductCard
            key={_id}
            img={productImages[0]}
            location={city}
            price={price}
            time={"30 min"}
            title={productTitle}
            type={adCategory}
          />
        );
      }
    );
  };
  return (
    <>
      {products && (
        <div className="ml-4 mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {mapProducts()}
        </div>
      )}
    </>
  );
};
