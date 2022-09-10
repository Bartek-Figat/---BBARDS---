import React from "react";
import { Header } from "./header";
import { FeaturedAds } from "./featured/FeaturedAds";
import { RecommendedAds } from "./recommended/RecommendedAds";
import { TrendingAds } from "./trending/TrendingAds";
import { BrowseOurTop } from "./browseOurTop/BrowserTop";
import { Footer } from "./footer/Footer";
import { TopCities } from "./topCities/TopCities";
import { TopCategoriesByAds } from "./topCategoriesByAds/TopCategoriesByAds/TopCategoriesByAds";
import { PostAd } from "./postAd/PostAd/PostAd";
import { BestReliablePricingPlans } from "./bestReliablePricingPlans/BestReliablePricingPlans/BestReliablePricingPlans";
import { ReadOurRecentArticles } from "./readOurRecentArticles/ReadOurRecentArticles/ReadOurRecentArticles";

export function Home() {
  return (
    <>
      <Header />
      <FeaturedAds />
      <RecommendedAds />
      <TrendingAds />
      <BrowseOurTop />
      <TopCities />
      <TopCategoriesByAds />
      <PostAd />
      <BestReliablePricingPlans />
      <ReadOurRecentArticles />
      <Footer />
    </>
  );
}
