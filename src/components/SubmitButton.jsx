const SubmitButton = ({ onSubmit }) => {
  return (
    <button
      onClick={onSubmit}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
