const Logo = ({ currentLogo }) => {
  return (
    <div>
      <img
        src={currentLogo.imageUrl}
        alt={currentLogo.answer}
        className="w-[150px] h-[150px] border rounded shadow"
      />
    </div>
  );
};

export default Logo;
