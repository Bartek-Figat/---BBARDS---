import React from "react";
import { Header } from "./header";
import { FeaturedAds } from "./featured/FeaturedAds";
import { RecommendedAds } from "./recommended/RecommendedAds";

export function Home() {
  return (
    <>
      <Header />
      <FeaturedAds />
      <RecommendedAds />
    </>
  );
}
