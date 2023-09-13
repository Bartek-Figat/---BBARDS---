import { useEffect, useState } from "react";
import { Header } from "./header";
import { ProductList } from "./ProductList";
import { useFilterAndPaginationProductsQuery } from "../../api/services/api";
import Pagination from "rc-pagination";
import { FilterList } from "./filters/FilterList";
import { useSearchParams } from "react-router-dom";
import "rc-pagination/assets/index.css";

type ProductProps = {
  _id: string;
  productImages: Array<string>;
  productTitle: string;
  price: number;
  adCategory: string;
  city: string;
};

type Obj = Record<string, string>;

export const CategoryDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<null | ProductProps[]>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  let params: Obj = {};

  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  const { data: productsQuery, isLoading } =
    useFilterAndPaginationProductsQuery({
      page: currentPage,
      ...params,
    });

  useEffect(() => {
    const productData = async () => {
      try {
        if (productsQuery) {
          setTotalPages(productsQuery.data.dataLength);
          setProducts(productsQuery.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    productData();
  }, [productsQuery]);

  return (
    <>
      <Header />

      <div className="container my-12 px-12 xl:w-[1280px]">
        <div className="flex flex-col-reverse lg:flex-row">
          <aside className="">
            <FilterList />
          </aside>
          {isLoading ? (
            <div>...isLoading</div>
          ) : (
            <div className="">
              {products && <ProductList products={products} />}
              <div className="border-t-[1px] border-gray-mercury py-8 mt-8">
                <Pagination
                  defaultPageSize={10}
                  pageSize={10}
                  current={currentPage}
                  total={totalPages}
                  onChange={(data) => setCurrentPage(data)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
