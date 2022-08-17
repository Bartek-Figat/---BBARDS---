import React from "react";
import { Header } from "./header";
import { FeaturedAds } from "./featured/FeaturedAds";

export function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <FeaturedAds />
      </div>
    </>
  );
}
