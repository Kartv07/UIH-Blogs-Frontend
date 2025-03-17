import BlogsCard from "@/components/BlogsCard";
import { getBlogsData } from "../../../../api.service";

export default async function BlogsDesc({ params }) {
  let { parentSlug } = await params;

  const getParentCategoryBlogs = async () => {
    let parentCategoryBlogs = await getBlogsData(
      `parentCategory=${parentSlug}`
    );
    if (parentCategoryBlogs?.status == 200) return parentCategoryBlogs?.data;
  };

  let blogsData = await getParentCategoryBlogs();

  return <BlogsCard linkHref={`${parentSlug}`} parentPage={true} blogsData={blogsData} />;
}
