"use client";

import PostCard from "@/components/PostCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => { 
    const fetchData = async () => { 
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setAllData(data); 
    };

    fetchData();
  }, []);  

  console.log(allData);

  return (
    <div>
      <h1 className="text-4xl underline text-center font-semibold my-5">Blog Posts</h1>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-5 gap-5">
        {allData.map((post) => <Link key={post.id} href={`/details/${post?.id}`}>
    <div className='p-2 border-[1px] h-full hover:shadow-xl cursor-pointer'>
        <h1 className='text-xl text-center mb-2  '>{post?.title}</h1>
        <p className='text-sm text-gray-500'>{post?.body}</p>
    </div>
    </Link>)}
      </div>
    </div>
  );
};

export default Page;
