import React from "react";
import { FilterList } from "./filters/FilterList";
import { Header } from "./header";

export const CategoryDetails = () => {
  return (
    <>
      <Header />
      <div className="container my-12">
        <aside>
          <FilterList />
        </aside>
      </div>
    </>
  );
};
