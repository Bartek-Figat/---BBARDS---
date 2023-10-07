import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import WordSuggestions from "../../wordSuggestions/WordSuggestions";
import americanWords from "../../wordSuggestions/words.json";
import { Header } from "./header";
import { ProductList } from "./ProductList";
import { useFilterAndPaginationProductsQuery } from "../../api/services/api";
import Pagination from "rc-pagination";
import { FilterList } from "./filters/FilterList";
import { useSearchParams } from "react-router-dom";
import { LooseValue } from "react-calendar/dist/cjs/shared/types";

import "rc-pagination/assets/index.css";
import "react-calendar/dist/Calendar.css";

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
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [dateRange, setDateRange] = useState<LooseValue | undefined>([
    new Date(),
    new Date(),
  ]);

  const onChange = (dates: any) => {
    setDateRange(dates);
    setSearchParams({
      startDate: dates[0].toISOString(),
      endDate: dates[1].toISOString(),
    });
  };

  let queryParams: Record<string, string> = {};
  queryParams = Object.fromEntries(searchParams.entries());

  const { data: productsQuery, isLoading } =
    useFilterAndPaginationProductsQuery({
      page: currentPage,
      ...queryParams,
    });

  useEffect(() => {
    const productData = async () => {
      try {
        if (productsQuery) {
          setTotalPages(productsQuery?.data?.dataLength || 0);
          setProducts(productsQuery?.data?.data || null);
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
            <Calendar
              selectRange
              onChange={onChange}
              value={dateRange}
              className="border rounded p-2"
              tileClassName={({ date, view }) =>
                view === "month" && // Only mark dates in month view
                Array.isArray(dateRange) &&
                dateRange[0] &&
                dateRange[1] &&
                date >= dateRange[0] &&
                date <= dateRange[1]
                  ? "selected bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            />

            <div>
              <h1>Word Suggestions</h1>
            </div>
            <WordSuggestions words={americanWords} />
            <FilterList />
          </aside>
          {isLoading ? (
            <div>...isLoading</div>
          ) : (
            <div className="">
              {products && (
                <ProductList key={currentPage} products={products} />
              )}
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
