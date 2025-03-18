import BlogsCard from "@/components/BlogsCard";
import { getBlogsData } from "../../../../api.service";
import Loader from "@/components/Loader";

export default async function BlogsDesc({ params }) {
  let { parentSlug } = await params;

  const getParentCategoryBlogs = async () => {
    let parentCategoryBlogs = await getBlogsData(
      `parentCategory=${parentSlug}`
    );
    if (parentCategoryBlogs?.status == 200) return parentCategoryBlogs?.data;
  };

  let blogsData = null;

  blogsData = await getParentCategoryBlogs();

  if(!blogsData) return <Loader />

  return <BlogsCard linkHref={`${parentSlug}`} parentPage={true} blogsData={blogsData} />;
}
