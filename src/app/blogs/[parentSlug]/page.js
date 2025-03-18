import BlogsCard from "@/components/BlogsCard";
import { getBlogsData } from "@/../api.service.js";

export const revalidate = 900; // 15 minutes

const getParentCategoryBlogs = async (parentSlug) => {
  let parentCategoryBlogs = await getBlogsData(
    `parentCategory=${parentSlug}`
  );
  if (parentCategoryBlogs?.status == 200) return parentCategoryBlogs?.data;
};

export default async function BlogsDesc({ params }) {

  let { parentSlug } = await params;

  let blogsData = await getParentCategoryBlogs(parentSlug);

  return <BlogsCard linkHref={`${parentSlug}`} parentPage={true} blogsData={blogsData} />;
}
