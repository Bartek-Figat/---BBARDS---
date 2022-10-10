import { useEffect, useState } from "react";
import { Header } from "./header";
import { ProductList } from "./ProductList";
import AdService from "services/AdService";
import { Pagination } from "./pagination/Pagination";
import { FilterList } from "./filters/FilterList";
import { useSearchParams } from "react-router-dom";
import { Button } from "components/buttons/Button";

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
  const [category, setCategory] = useState("");
  const [rate, setRate] = useState("");
  const [city, setCity] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const productData = async () => {
      try {
        const { data } = await AdService.getPage({
          page: currentPage,
          adCategory: category,
          rate: rate,
          city: city,
        });
        setTotalPages(data.data.dataLength);
        setProducts(data.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    productData();
  }, [currentPage, category, rate, city]);

  const applyFilters = () => {
    setCategory(searchParams.get("type") || "");
    setRate(searchParams.get("rate") || "");
    setCity(searchParams.get("city") || "");
  };

  return (
    <>
      <Header />

      <div className="container my-12">
        <div className="flex">
          <aside className="flex flex-col">
            <FilterList />
            <div className="mt-4">
              <Button variant="filled" onClick={applyFilters}>
                Apply filters
              </Button>
            </div>
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
