import React from 'react'
import BlogslugCompo from './BlogslugCompo'
import { baseurl } from '@/app/component/common';

export async function generateStaticParams() {
  const res = await fetch(`${baseurl}/blogs`); // Replace with your actual API
  const blogs = await res.json();

  return blogs.map((blog) => ({
    slug: blog.slug, 
  }));
}
 const page = ({params:{slug}}) => {
  return (
    <BlogslugCompo slug={slug} />
  )
}

export default page
