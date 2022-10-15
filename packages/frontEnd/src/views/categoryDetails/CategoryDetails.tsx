import { useEffect, useState } from "react";
import { Header } from "./header";
import { ProductList } from "./ProductList";
import AdService from "services/AdService";
import { Pagination } from "./pagination/Pagination";
import { FilterList } from "./filters/FilterList";
import { useSearchParams } from "react-router-dom";

interface ProductProps {
  _id: string;
  productImages: Array<string>;
  productTitle: string;
  price: number;
  adCategory: string;
  city: string;
}

export const CategoryDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<null | ProductProps[]>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let params = {};

    // @ts-ignore
    for (const [key, value] of searchParams.entries()) {
      // @ts-ignore
      params[key] = value;
    }

    const productData = async () => {
      try {
        const { data } = await AdService.getPage({
          page: currentPage,
          ...params,
        });
        setTotalPages(data.data.dataLength);
        setProducts(data.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    productData();
  }, [currentPage, searchParams]);

  return (
    <>
      <Header />

      <div className="container my-12">
        <div className="flex flex-col-reverse lg:flex-row">
          <aside className="">
            <FilterList />
          </aside>
          <div className="">
            {products && <ProductList products={products} />}
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              changeCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};
