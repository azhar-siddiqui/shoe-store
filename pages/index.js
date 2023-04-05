import { HeroBanner, ProductCard, Wrapper } from "@/components/exports";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* Heading And Paragraph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Mile
          </h1>
          <div className="text-base md:text-xl">
            A lightweight Nike ZoomX midsole in combined with increased stack
            height to help provide cushioning during extended stretching of
            running
          </div>
        </div>
        {/* Heading and Paragraph end */}
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
    </main>
  );
}
