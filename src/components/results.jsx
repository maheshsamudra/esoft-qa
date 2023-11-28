import React, { useEffect, useState } from "react";
import useQaStore from "../stores/useQaStore";
import ReactMarkdown from "react-markdown";

const Results = () => {
  const qa = useQaStore((state) => state.qa);
  const searchString = useQaStore((state) => state.searchString);
  const category = useQaStore((state) => state.category);

  const setSearchString = useQaStore((state) => state.setSearchString);
  const setCategory = useQaStore((state) => state.setCategory);

  const [results, setResults] = useState(qa);

  useEffect(() => {
    if (!category && !searchString) {
      setResults(qa);
      return;
    }
    let final = qa;
    if (category) {
      final = qa.filter((i) => i.category === category);
    }
    if (searchString) {
      const search = searchString.toLowerCase();
      final = final.filter((i) => {
        const q = i.question.toLowerCase();
        const a = i.content.toLowerCase();
        return q.includes(search);
      });
    }
    setResults(final);
  }, [searchString, category]);

  if (!results?.length) {
    return (
      <div className={"mt-5"}>
        <p>No results found.</p>
        {searchString || category ? (
          <>
            <button
              type="button"
              onClick={() => {
                setSearchString("");
                setCategory("");
              }}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Clear filters
            </button>
          </>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      {results.map((qa, idx) => {
        const { question, content, link } = qa;
        return (
          <div key={idx}>
            <div className="my-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {question}
              </h5>
              <ReactMarkdown children={content} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Results;

const categories = {
  GENERAL: "General",
  SDP: "SDP",
  MAD: "MAD",
  PROJECT: "Project",
  PRO3: "Programming III",
};

const questions = [
  {
    category: categories.GENERAL,
    question: "What is the style guide for the Project Proposal?",
    answer: `Leave the cover page as it is, All the content inside should be in Times New Roman`,
  },
];
