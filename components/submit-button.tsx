import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  answers: Array<number>;
  submit: (answers: Array<number>) => void;
};

const SubmitButton = ({ children, answers, submit }: Props) => (
  <button
    onClick={() => submit(answers)}
    className="border border-blue-500 font-semibold rounded py-2 px-4 my-4 w-full text-white bg-blue-500 hover:bg-blue-700 hover:text-white hover:border-transparent"
  >
    {children}
  </button>
);

export default SubmitButton;
