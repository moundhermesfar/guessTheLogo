const SkipButton = ({ onSkip }) => {
  return (
    <button
      onClick={onSkip}
      className="bg-gray-500 text-white px-4 py-2 rounded"
    >
      Next
    </button>
  );
};

export default SkipButton;
