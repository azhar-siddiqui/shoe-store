import React from "react";
import { ProductDetailsCarousel, Wrapper } from "@/components/exports";
import { IoMdHeartEmpty } from "react-icons/io";
const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left Column Start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full">
            <ProductDetailsCarousel />
          </div>
          {/* Left Column End */}
          {/* Left Right Start */}
          <div className="flex-[1] py-3">
            {/* Product Title */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            {/* Product Subtitle */}
            <div className="text-lg font-semibold mb-5">
              Mes&apos;s Golf Shoes
            </div>
            {/* Product Price */}
            <div className="text-lg font-semibold">MRP : $ 19 695.00</div>
            <div className="text-lg font-semibold">Incl. of Taxes</div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              Also include all applicable duties
            </div>
            {/* Product Size Range Start */}
            <div className="mb-10">
              {/* Heading Start */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5]">
                  Select Size
                </div>
              </div>
              {/* Heading End */}

              {/* Size Start */}
              <div className="grid grid-cols-3 gap-3">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
              </div>
              {/* Size End */}

              {/* Show Err Start */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* Show Err End */}
            </div>
            {/* Product Size Range End */}

            {/*Add to Cart Button */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/*Add to Cart Button End */}
            {/*wishlist Button */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95  flex items-center justify-center gap-2 hover:opacity-75 mb-10 ">
              Whishlist <IoMdHeartEmpty size={20} />
            </button>
            {/*wishlist Button End */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
            </div>
            <div className="text-md mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, exercitationem! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Iure vero ea quisquam ipsa ab
              perferendis incidunt, alias odit! Aut eius ea nesciunt placeat
              veritatis fugiat deleniti, iure cumque eum inventore!
            </div>
          </div>
          {/* Left Right End */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
