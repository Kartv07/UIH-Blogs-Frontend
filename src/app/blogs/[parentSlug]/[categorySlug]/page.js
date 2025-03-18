import React from "react";
import { getBlogsData } from "@/../api.service.js";
import BlogsCard from "@/components/BlogsCard";

export const revalidate = 900 // 15 minutes

const getParentCategoryBlogs = async (paramsData) => {
  let parentCategoryBlogs = await getBlogsData(
    `parentCategory=${paramsData?.parentSlug}&category=${paramsData?.categorySlug}`
  );
  if (parentCategoryBlogs?.status == 200) return parentCategoryBlogs?.data;
};

async function ParentCategoryPage({ params }) {
  
  let paramsData = await params;

  let blogsData = await getParentCategoryBlogs(paramsData);

  return (
    <div>
      <BlogsCard
        linkHref={`/blogs/${paramsData?.parentSlug}/${paramsData?.categorySlug}`}
        paramsData={paramsData}
        blogsData={blogsData || []}
      />
    </div>
  );
}

export default ParentCategoryPage;
