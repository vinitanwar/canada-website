"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { baseurl, imgurl } from "./common";


const articles = [
  {
    category: "Organization",
    categoryColor: "bg-blue-500",
    title: "How to Track and Manage Your Business Expenses",
    description:
      "Effective expense management is crucial for business success. Discover practical strategies to track, reduce, and optimize your business expenses for long-term growth.",
    author: "Jane Doe",
    time: "1h ago",
    image:
      "/Images/blog.webp",
    avatar:
      "/Images/avatar.webp",
  },
  {
    category: "Savings",
    categoryColor: "bg-yellow-500",
    title: "Unlocking Tax Deductions for Small Businesses",
    description:
      "Small business owners often miss valuable tax deductions. Learn about key deductions that can reduce your tax burden and improve your financial outlook.",
    author: "Jerry Doe",
    time: "Yesterday",
    image:
      "/Images/blog-4.webp",
    avatar:
      "/Images/avatar.webp",
  },
  {
    category: "Clarity",
    categoryColor: "bg-red-500",
    title: " Decoding Financial Statements: A Guide for Business Owners",
    description:
      " Financial statements are the backbone of any business. Learn how to interpret your balance sheet, income statement, and cash flow to make smarter business decisions.",
    author: "Sarah J.,",
    time: "2d ago",
    image:
      "/newimages/service.avif",
    avatar:
      "/Images/avatar.webp",
  },
];

export default function ArticleGrid() {
  const [blog,setblog]=useState()
const [loader,setLoader]=useState(true)

  const fetchBlog=async()=>{
    setLoader(true)
    const response= await axios.get(`${baseurl}/blogs`)

setblog(response.data)
setLoader(false)
  }

  useEffect(()=>{
    fetchBlog()

  },[])
  return (
    <>
    {loader && 
    <div className=" py-4 my-7  px-4 sm:px-6 lg:px-16 xl:px-24 grid grid-cols-1 md:grid-cols-3">
    <div className="animate-pulse bg-white rounded-xl shadow p-4 w-full max-w-sm">
      <div className="h-40 bg-gray-300 rounded mb-4" />
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-2" />
      <div className="h-6 bg-gray-400 rounded w-4/5 mb-2" />
      <div className="h-4 bg-gray-300 rounded w-full mb-1" />
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
    <div className="animate-pulse bg-white rounded-xl shadow p-4 w-full max-w-sm">
      <div className="h-40 bg-gray-300 rounded mb-4" />
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-2" />
      <div className="h-6 bg-gray-400 rounded w-4/5 mb-2" />
      <div className="h-4 bg-gray-300 rounded w-full mb-1" />
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
    <div className="animate-pulse bg-white rounded-xl shadow p-4 w-full max-w-sm">
      <div className="h-40 bg-gray-300 rounded mb-4" />
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-2" />
      <div className="h-6 bg-gray-400 rounded w-4/5 mb-2" />
      <div className="h-4 bg-gray-300 rounded w-full mb-1" />
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
    
    </div>}
   { !loader && <div className="py-4 my-7  px-4 sm:px-6 lg:px-16 xl:px-24">
      <div className="container mx-auto text-center mb-12 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-4">
         Article
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We provide expert accounting, tax, and advisory services tailored to your goals.
          Let us handle the numbers so you can focus on what matters most.


        </p>
      </div>
      <Link href="/blogdetails"> <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blog?.map((article, idx) => (
          <Link
            key={idx}
            href={`/blogdetails/${article?.slug}`}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src= { `${imgurl}/${article?.image}`}
                alt={article?.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span
                className={`inline-block  bg-[${article?.color}] text-white text-xs px-3 py-1 rounded-full mb-2`}
                style={{backgroundColor:article?.color}}
              >
                {article?.type}
              </span>
              <h2 className="text-xl font-semibold mb-2">{article?.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {article?.des}
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src={'/Images/avatar.webp'}
                  alt={article?.name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div className="text-sm text-gray-800">
                  <p>{article?.name}</p>
                  <p className="text-gray-500 text-xs">{article?.created_at.split("T")[0]}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}

      </div> </Link>
    </div>
}
    </>
  );
}
