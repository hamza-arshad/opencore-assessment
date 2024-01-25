"use client"

import Banner from "@/components/Banner";
import BlogCard from "@/components/BlogCard";
import BlogCardSM from "@/components/BlogCardSM";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/data`);
        const data = await res.json();
        setBlogs(data.data)
      } catch (err) {
        console.log(err);
      }
    };
    callAPI()
  },[])

  return (
    <main className="font-[exo-haveltica]">
      <SiteHeader/>
      <div className="px-4 laptop:px-[152px] desktop:px-[202px]">
          <div className="flex tablet:flex-col laptop:flex-row items-center mt-14 laptop:mt-[90px] desktop:mt-[100px] justify-between">
              <h1 className="text-[32px] leading-[38.4px] tracking-[0.32px] mb-4
              laptop:text-[64px] laptop:leading-[72px] laptop:tracking-[-0.64px]
              desktop:text-[96px] desktop:leading-[110px] desktop:tracking-[-0.96px] font-bold">
                  Atlas Premier <br/> Knowledge Blogs:
              </h1>
              <h3 className="max-w-[600px] text-base laptop:text-2xl desktop:text-[32px] font-medium">
                "Immerse yourself in the latest knowledge and research from our team of software engineers and design professionals.
              </h3>
          </div>
          <BlogCard imageUrl={"/blog-media.png"}/>
      </div>
      <div className="hidden laptop:block h-[155px] rotate-180 relative">
        <Image
            src="/union.svg"
            alt="Union"
            className="object-cover"
            fill
            priority
        />
      </div>
      <div className="laptop:mx-[72px] px-4 laptop:mt-[96px] desktop:mx-[100px]">
        <div className="mb-16 laptop:hidden">
          <Navbar imageUrl={"/blog-nav-icon.svg"} />
        </div>
        <div className="flex flex-col laptop:flex-row items-center justify-between">
          <h1 className="text-[40px] laptop:text-[64px] desktop:text-[96px] font-bold">
            Blogs
          </h1>
          <ul className="grid grid-cols-2 mt-6 laptop:mt-0 laptop:flex laptop:flex-wrap text-xs laptop:text-base desktop:text-[20px] font-medium text-center text-[#98A2B3]">
              <li className="me-2">
                  <a href="#" className="inline-block px-4 py-3 text-[#294F74] bg-[#EDF2F5] border border-[#294F74] rounded-[877px] active" aria-current="page">All Blogs</a>
              </li>
              <li className="me-2">
                  <a href="#"  className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Trends</a>
              </li>
              <li className="me-2">
                  <a href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Research</a>
              </li>
              <li className="me-2">
                  <a href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">In-house Knowledge</a>
              </li>
          </ul>
        </div>
        <BlogCard imageUrl={"/social-media.png"} showBgImage={true} />
        <div className="w-full grid grid-cols-1 laptop:grid-cols-3 gap-4">
          {
            blogs.length && blogs.slice(1).map((blog: {image: string}, idx) => <BlogCardSM key={idx} imageUrl={blog.image} />) 
          }
        </div>
        <section className="my-8 laptop:my-25">
          <Banner />
        </section>
      </div>
      <SiteFooter/>
    </main>
  );
}