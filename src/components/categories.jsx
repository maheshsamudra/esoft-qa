import React from "react";
import categories from "../config/categories.mjs";
import useQaStore from "../stores/useQaStore";

const Categories = () => {
  const category = useQaStore((state) => state.category);
  const setCategory = useQaStore((state) => state.setCategory);

  return (
    <div
      className={
        "flex flex-row justify-items-center justify-end content-center mt-5"
      }
    >
      <div></div>
      <select
        id="categories"
        className="w-[50%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="">Category: All</option>
        {categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
