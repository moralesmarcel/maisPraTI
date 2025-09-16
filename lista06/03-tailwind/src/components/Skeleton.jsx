import React from "react";

export default function Skeleton() {
  return (
    <div className="skeleton p-4">
      <div className="w-full h-48 rounded-md mb-3"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
      <div className="h-4 w-3/5 bg-gray-200 dark:bg-gray-600 rounded"></div>
    </div>
  );
}
