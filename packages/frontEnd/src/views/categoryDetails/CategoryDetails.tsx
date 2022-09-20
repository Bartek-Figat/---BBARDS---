import React from "react";
import { FilterList } from "./filters/FilterList";
import { Header } from "./header";
import { ProductList } from "./ProductList";

export const CategoryDetails = () => {
  return (
    <>
      <Header />
      <div className="container my-12">
        <div className="flex">
          <aside>
            <FilterList />
          </aside>
          <ProductList />
        </div>
      </div>
    </>
  );
};
