import React, { useEffect, useState } from "react";
import { ProductCard } from "views/home/recommended/ProductCard";
import AdService from "../../services/AdService";
import { Pagination } from "./pagination/Pagination";

interface ProductProps {
  productImages: Array<string>;
  productTitle: string;
  price: number;
  adCategory: string;
  city: string;
}

export const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<null | ProductProps[]>(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    AdService.getPage(currentPage).then((res) => {
      setTotalPages(res.data.totalPages);
      setProducts(res.data.filter);
    });
  }, [currentPage]);

  const mapProducts = () => {
    if (!products) {
      return;
    }
    return products.map(
      ({ productImages, productTitle, price, adCategory, city }, index) => {
        return (
          <ProductCard
            key={index}
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
    <div>
      {products && (
        <div className="ml-4 mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {mapProducts()}
        </div>
      )}
      <Pagination totalPages={totalPages} changeCurrentPage={setCurrentPage} />
    </div>
  );
};
