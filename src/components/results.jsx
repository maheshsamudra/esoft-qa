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
      <div>
        <div className={"mt-[-33px] mb-[40px] w-[50%]"}>No results</div>
        {searchString || category ? (
          <div className={"text-center pt-10"}>
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
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <div className={"mt-[-33px] mb-[40px]  w-[50%]"}>
        <span className={"hidden md:inline"}>Showing </span>
        {results.length} / {qa.length} questions
      </div>
      {results.map((qa, idx) => {
        const { question, content, slug } = qa;
        return (
          <div key={idx}>
            <div className="my-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {question}
              </h5>
              <ReactMarkdown
                children={content}
                components={{
                  a: (props) => (
                    <a href={props.href} target={"_blank"} className={"inline"}>
                      {props.children}
                      <svg
                        className="w-3 h-3 text-gray-800 dark:text-white inline mx-1 relative mt-[-4px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                        />
                      </svg>
                    </a>
                  ),
                }}
              />
              <hr className={"dark:border-gray-600 my-3"} />

              <small className={"text-xs opacity-50"}>
                Ref:{" "}
                <span
                  onClick={() => {
                    try {
                      navigator.clipboard.writeText(slug);
                    } catch (e) {
                      console.log("failed to copy to clipboard", e);
                    }
                  }}
                >
                  {slug}
                </span>
              </small>
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
