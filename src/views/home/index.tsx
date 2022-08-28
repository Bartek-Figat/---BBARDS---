import React from "react";
import { Header } from "./header";
import { FeaturedAds } from "./featured/FeaturedAds";
import { RecommendedAds } from "./recommended/RecommendedAds";
import { TrendingAds } from "./trending/TrendingAds";
import { BrowseOurTop } from "./browseOurTop/BrowserTop";

export function Home() {
  return (
    <>
      <Header />
      <FeaturedAds />
      <RecommendedAds />
      <TrendingAds />
      <BrowseOurTop />
    </>
  );
}
