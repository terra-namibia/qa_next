import ChoiceButton from "./choice-button";

const Problem = (props) => {
  return (
    <div className="bg-indigo-50 rounded-lg py-4 px-4 my-4">
      <h3 className="text-xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 my-4">
        <span className="text-gray-700">質問: {props.question_no} </span>
        {props.problem}
      </h3>
      <div className="flex flex-col">
        <ChoiceButton
          onClick={props.setAnswer}
          index={props.question_no}
          answer={"a"}
        >
          aa
        </ChoiceButton>
        <ChoiceButton
          onClick={props.setAnswer}
          index={props.question_no}
          answer={"b"}
        >
          bb
        </ChoiceButton>
        <ChoiceButton
          onClick={props.setAnswer}
          index={props.question_no}
          answer={"c"}
        >
          cc
        </ChoiceButton>
      </div>
    </div>
  );
};

export default Problem;
