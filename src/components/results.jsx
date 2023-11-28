import React from "react";
import useQaStore from "../stores/useQaStore";
import ReactMarkdown from "react-markdown";

const Results = () => {
  const qa = useQaStore((state) => state.qa);

  return (
    <div>
      {qa.map((qa, idx) => {
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
