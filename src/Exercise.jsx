import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
            name="adri" 
            email="adri@jokowi.com"
            street="jl. proxima centauri. 1"
            city="alpha centauri b"
            />
          <UserCard 
            name="jokowi" 
            email="jokowi@jokowi.com"
            street="jl. jokowi no. 1"
            city="beta centauri b"
            />
          <UserCard 
            name="megawati" 
            email="megawati@jokowi.com"
            street="jl. megawati no. 1"
            city="gamma centauri b"
            />
        </div>
      </div>
    </>
  );
}

export default Exercise;