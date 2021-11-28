const ChoiceButton = (props) => {
  console.log(props);
  return (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded py-2 px-4 mb-4 w-full">
      {props.children}
    </button>
  );
};
export default ChoiceButton;
