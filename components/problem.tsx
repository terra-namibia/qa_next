import ChoiceButton from "./choice-button";

const Problem = (props) => {
  return (
    <>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        質問: {props.index + 1}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {props.problem}
      </h4>
      <>
        <ChoiceButton>aa</ChoiceButton>
        <ChoiceButton>bb</ChoiceButton>
        <ChoiceButton>cc</ChoiceButton>
        <ChoiceButton>dd</ChoiceButton>
      </>
    </>
  );
};

export default Problem;
