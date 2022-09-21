import { useEffect, useState } from "react";
import { Header } from "./header";
import { ProductList } from "./ProductList";
import { FiltersForm } from "./filters/FiltersForm";
import AdService from "services/AdService";
import { Pagination } from "./pagination/Pagination";
import { FieldValues } from "react-hook-form";

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

  useEffect(() => {
    const productData = async () => {
      try {
        const { data } = await AdService.getPage({
          page: currentPage,
          adCategory: category,
        });
        setTotalPages(data.dataLength);
        setProducts(data.data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    productData();
  }, [currentPage, category]);

  const applyFilters = (data: FieldValues) => {
    console.log(data);

    if (data.sales) {
      setCategory("Sale");
      return;
    }
    if (data.booking) {
      setCategory("Booking");
      return;
    }
    if (data.rental) {
      setCategory("Rent");
      return;
    }

    setCategory("");
  };

  return (
    <>
      <Header />
      <div className="container my-12">
        <div className="flex">
          <aside>
            <FiltersForm submit={applyFilters} />
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
