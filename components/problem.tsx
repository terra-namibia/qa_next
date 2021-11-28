import ChoiceButton from "./choice-button";

const Problem = (props) => {
  return (
    <div className=" max-w-sm mr-auto ml-auto">
      <h3 className="text-xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 my-4">
        <span className="text-gray-700">質問: {props.index + 1} </span>
        {props.problem}
      </h3>
      <div className="flex flex-col">
        <ChoiceButton>aa</ChoiceButton>
        <ChoiceButton>bb</ChoiceButton>
        <ChoiceButton>cc</ChoiceButton>
        <ChoiceButton>dd</ChoiceButton>
      </div>
    </div>
  );
};

export default Problem;
