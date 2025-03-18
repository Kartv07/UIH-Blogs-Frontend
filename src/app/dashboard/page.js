import React from "react";
import { getAllCategories } from "@/../api.service.js";
import Link from "next/link";

export const revalidate = 900; // 15 minutes

export const metadata = {
  title: "Dashboard | Until It Happens",
  description: "Explore detailed tutorials on DSA, System Design, and Software Development with hands-on examples and real-world insights.",
};

const getAllCatetoriesHandler = async () => {
  let categories = await getAllCategories();
  if (categories?.status == 200) return categories?.data;
};

export default async function page() {
  
  let allCategories = await getAllCatetoriesHandler();

  return (
    <div className="px-12 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 ">
      {allCategories?.map((cat, index) => (
        <Link href={`/blogs/${cat?.parentCategory?.slug}/${cat?.slug}`} key={index}>
          <div className="relative p-4 h-40 rounded-xl bg-[linear-gradient(145deg,#141414_80%,#53e1e8_20%)] hover:cursor-pointer backdrop-blur-lg border-2 border-[#141414] hover:border-[#53e1e8] transform transition-all duration-300 hover:scale-105 hover:text-[#53e1e8]">
            <div className="text-2xl font-semibold">{cat?.title}</div>
            <p className="mt-2 text-sm">
              {cat?.desc ?? 'Data structures for storing multiple values efficiently.'}
            </p>
            <div className="absolute bottom-5 font-semibold bg-gradient-to-r to-white from-[#53e1e8] text-transparent bg-clip-text">{cat?.parentCategory?.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
