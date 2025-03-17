import React from "react";
import { getBlogsData } from "../../../../../api.service";
import BlogsCard from "@/components/BlogsCard";

async function ParentCategoryPage({ params }) {
  let paramsData = await params;

  const getParentCategoryBlogs = async () => {
    let parentCategoryBlogs = await getBlogsData(
      `parentCategory=${paramsData?.parentSlug}&category=${paramsData?.categorySlug}`
    );
    if (parentCategoryBlogs?.status == 200) return parentCategoryBlogs?.data;
  };

  let blogsData = await getParentCategoryBlogs();

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
