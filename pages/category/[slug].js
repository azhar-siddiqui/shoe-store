import React from "react";
import { ProductCard, Wrapper } from "@/components/exports";
import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
        </div>
        {/* Product Grid Start */}
        <div className="grid grid-co md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* Product Grid End */}
      </Wrapper>
    </div>
  );
};

export default Category;
