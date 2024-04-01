"use client";

import CategorySection from "@/components/category_section";
import Nav from "@/components/main_navbar";
import ProductOverview from "@/components/product_overview";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <ProductOverview />
      <CategorySection />
    </main>
  );
}
