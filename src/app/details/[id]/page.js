"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();  
  const [post, setPost] = useState(null);



  useEffect(() => {
    const fetchPost = async () => { 
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data); 
    };

    fetchPost();
  }, [id]);


  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl text-center font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  );
};

export default BlogDetails;
