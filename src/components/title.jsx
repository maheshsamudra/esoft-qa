import React from "react";
import useQaStore from "../stores/useQaStore";

const Title = () => {
  const qa = useQaStore((state) => state.qa);
  return (
    <div className={"text-center"}>
      <h1 className={"text-xl"}>ESOFT Knowledge base</h1>
      <hr className={"dark:border-gray-700 my-3"} />
      <p className={"mb-10"}>Showing answers to {qa.length} questions</p>
    </div>
  );
};

export default Title;
