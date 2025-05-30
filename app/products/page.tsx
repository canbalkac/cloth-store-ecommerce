import { Button } from "@/components/ui/button";
import Search from "@/components/ui/Search";
import { products } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const buttons = [
  "NEW",
  "SHIRTS",
  "POLO SHIRTS",
  "SHORTS",
  "SUITS",
  "BEST SELLERS",
  "T-SHIRTS",
  "JEANS",
  "JACKETS",
  "COATS",
];

const sizes = ["XS", "S", "M", "L", "XL", "2XL"];

const ProductsPage = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 gap-8">
      {/* Breadcrumb and Title */}
      <div className="text-sm text-gray-500">Home / Products</div>
      <h1 className="text-2xl font-bold">PRODUCCTS</h1>

      {/* Search and Tabs */}
      <div className="flexx flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Search />
        <div className="flex flex-wrap gap-2 mt-2">
          {buttons.map((button, index) => (
            <Button
              variant={"outline"}
              className="text-xs px-3 py-1 cursor-pointer"
              key={index}
            >
              {button}
            </Button>
          ))}
        </div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        {/* Filters */}
        <aside className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size, index) => (
                <Button
                  key={index}
                  variant={"outline"}
                  className="px-4 cursor-pointer"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Availability</h3>
            <div className="space-y-1 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-black" /> Availability
                (450)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-black" /> Out Of Stock
                (18)
              </label>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link href={`/products/` + index} key={index}>
              <div className="border p-4 flex flex-col">
                <div className="w-full h-64 bg-gray-200 mb-4">
                  <Image
                    src={product.image[0]}
                    width={200}
                    height={64}
                    quality={100}
                    alt="product"
                    className="w-full h-64"
                  />
                </div>
                <p className="text-xs text-gray-500">{product.title}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="font-medium">{product.desc}</p>
                  <p className="font-medium">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
