import React from 'react';
import { getBlogsData } from '../../../api.service';

export default async function Page() {

  const getAllBlogsHandler = async () => {
    let blogs = await getBlogsData('');
    if (blogs?.status == 200) return blogs?.data;
  }

  let allBlogs = await getAllBlogsHandler('');

  return (
    <div>
      <h1>All Blogs</h1>
      <ul>
        {allBlogs.map((blog, index) => (
          <li key={index}>{blog.heading}</li>
        ))}
      </ul>
    </div>
  );
}
