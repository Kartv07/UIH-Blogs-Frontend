import { getBlogsData } from "../../../../api.service";
import Link from "next/link";

export default async function BlogsDesc({ params }) {
  let { parentSlug } = await params;

  const getParentCategoryBlogs = async () => {
    let parentCategoryBlogs = await getBlogsData(
      `parentCategory=${parentSlug}`
    );
    if (parentCategoryBlogs?.status == 200) return parentCategoryBlogs?.data;
  };

  let blogsData = await getParentCategoryBlogs();

  return (
    <div className="p-8 flex flex-col gap-8 items-center jus">
      {blogsData?.map((blog, index) => (
        <div
          key={index}
          className="bg-[#141414] relative border-2 border-[#1d1e24] bg-[linear-gradient(32deg,#141414_95%,#53e1e8_20%)] w-full rounded-lg p-4 px-8 flex flex-col gap-4 hover:border-2 hover:border-[#53e1e8]"
        >
          <h1 className="text-xl max-w-[90%] font-semibold font-sans ">
            {blog?.heading}
          </h1>
          <div className="text-lg">{blog.smallDesc}</div>
          <div className="px-4 py-2 absolute font-semibold right-10 bottom-5 bg-gradient-to-r to-white from-[#53e1e8] text-black rounded-lg border-2 border-[#1d1e24] w-fit">
            {blog?.categories?.title}
          </div>
          <Link
            href={`${parentSlug}/${blog?.categories?.slug}/${blog?.slug}`}
            className="font-mono font-semibold hover:cursor-pointer w-fit bg-gradient-to-r to-white from-[#53e1e8] text-transparent bg-clip-text"
          >
            Read More...
          </Link>
        </div>
      ))}
    </div>
  );
}
