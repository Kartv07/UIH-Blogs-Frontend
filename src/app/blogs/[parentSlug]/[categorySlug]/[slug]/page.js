import React from "react";
import { getBlogsData } from "../../../../../../api.service";
import { headers } from "next/headers";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export async function DetailPage({ params }) {
  let paramsData = await params;

  const headersList = headers();
  const previousPage = headersList.get("referer") || "/";

  const getBlogDetailHandler = async (slug) => {
    let blog = await getBlogsData(slug);
    if (blog?.status == 200) return blog?.data;
  };

  let blogDetails = await getBlogDetailHandler(`slug=${paramsData?.slug}`);

  return (
    <div className="m-8 relative p-8 bg-[#141414] border-2 border-[#1d1e24] rounded-lg">
      <Link href={previousPage}>
        <div className="p-2 mb-4 w-fit hover:cursor-pointer hover:border-[#53e1e8] border-2 rounded-lg border-[#1d1e24] ">
          <ChevronLeft size={26} color="#53e1e8" />
        </div>
      </Link>
      <h1 className="text-3xl font-extrabold font-mono uppercase bg-gradient-to-r to-white from-[#53e1e8] text-transparent bg-clip-text">
        {blogDetails?.[0]?.heading}
      </h1>
      <div className="mt-8 border-l-4 italic border-[#53e1ed] pl-4 text-lg font-semibold">
        {blogDetails?.[0]?.smallDesc}
      </div>
      <div className="flex justify-end gap-4">
        <div className="px-4 py-2 mt-6 text-end font-semibold bg-gradient-to-r to-white from-[#53e1e8] text-black rounded-lg border-2 border-[#1d1e24] w-fit">
          {blogDetails?.[0]?.categories?.title}
        </div>
        <div className="px-4 py-2 mt-6 text-end font-semibold bg-gradient-to-r to-white from-[#53e1e8] text-black rounded-lg border-2 border-[#1d1e24] w-fit">
          {blogDetails?.[0]?.parentCategories?.title}
        </div>
      </div>
      <div
        className="font-sans font-normal leading-8 tracking-wider text-lg cursor-text"
        dangerouslySetInnerHTML={{ __html: blogDetails?.[0]?.desc }}
      ></div>
    </div>
  );
}

export default DetailPage;
