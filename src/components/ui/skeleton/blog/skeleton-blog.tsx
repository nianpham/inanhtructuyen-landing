import React from "react";

const SkeletonBlog = () => {
  return (
    <div className="w-5/6 md:w-2/3 lg:w-2/3 py-10 animate-pulse">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2">
          <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded-md w-5/6 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded-md w-full mb-4"></div>
          <div className="w-1/2 h-4 bg-gray-300 rounded-md my-6"></div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end items-center">
          <div className="w-64 h-40 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2">
          <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded-md w-5/6 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded-md w-full mb-4"></div>
          <div className="w-1/2 h-4 bg-gray-300 rounded-md my-6"></div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end items-center">
          <div className="w-64 h-40 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2">
          <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded-md w-5/6 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded-md w-full mb-4"></div>
          <div className="w-1/2 h-4 bg-gray-300 rounded-md my-6"></div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end items-center">
          <div className="w-64 h-40 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonBlog;
