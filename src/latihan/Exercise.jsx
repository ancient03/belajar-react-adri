import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { posts } from "./PostData"; 

const Exercise = () => {

  const [dataPosts, setDataPosts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        setDataPosts(posts);
      } catch (error) {
        console.error("[Component] Gagal memuat data posts:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
        <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-special-red2">
        Post Cards
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};


export default Exercise;