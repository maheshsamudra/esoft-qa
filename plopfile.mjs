import categories from "./src/config/categories.mjs";
import { v4 as uuidV4 } from "uuid";

export default function (plop) {
  // controller generator
  plop.setGenerator("controller", {
    description: "Creating a question",
    prompts: [
      {
        type: "input",
        name: "question",
        message: "Question?",
      },
      {
        type: "list",
        name: "category",
        message: "Category:",
        choices: categories,
      },
      {
        type: "input",
        name: "answer",
        message: "Answer? (You can improve the answer using mdx after)",
      },
    ],
    actions: ({ question, category, answer }) => {
      return [
        {
          type: "add",
          path: `src/data/${uuidV4()}.mdx`,
          templateFile: "plop-templates/question.hbs",
          data: { question, category, answer },
        },
      ];
    },
  });
}
