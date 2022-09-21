import React, { useEffect, useState } from "react";
import { ProductCard } from "views/home/recommended/ProductCard";
import AdService from "../../services/AdService";
import Pagination from "rc-pagination";

interface ProductProps {
  productImages: Array<string>;
  productTitle: string;
  price: number;
  adCategory: string;
  city: string;
  _id: string;
}

export const ProductList = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [products, setProducts] = useState<null | ProductProps[]>(null);
  const [totalPages, setTotalPages] = useState(0);

  console.log(products);

  useEffect(() => {
    async function productData() {
      try {
        const { data } = await AdService.getPage(currentPage);
        setTotalPages(data.dataLength);
        setProducts(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    productData();
  }, [currentPage]);

  const updatePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const mapProducts = () => {
    if (!products) return <p>No products</p>;

    return products.map(
      ({ productImages, productTitle, price, adCategory, city, _id }) => {
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
    <div>
      <div className="flex items-center justify-between  bg-white px-4 py-3 sm:px-6  w-full">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <Pagination
                className="inline-flex text-center py-2 mr-2 rounded-l-md border border-gray-300 cursor-pointer"
                onChange={(pageNumber) => updatePage(pageNumber)}
                total={totalPages}
                defaultPageSize={10}
                current={currentPage}
                showTitle={true}
              />
            </nav>
          </div>
        </div>
      </div>
      {products && (
        <div className="ml-4 mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {mapProducts()}
        </div>
      )}

      <div className="flex items-center justify-between  bg-white px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <Pagination
                className="inline-flex text-center py-2 mr-2 rounded-l-md border border-gray-300 cursor-pointer"
                onChange={(pageNumber) => updatePage(pageNumber)}
                total={totalPages}
                defaultPageSize={10}
                current={currentPage}
              />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
