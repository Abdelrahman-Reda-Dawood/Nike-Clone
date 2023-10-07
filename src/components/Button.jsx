const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center rounded-full items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : 'bg-coral-red text-white border-coral-red'
    }
          ${fullWidth && 'w-full'}
          
          hover:text-coral-red hover:bg-fuchsia-100 transition duration-700
    
    `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-f h-5"
        />
      )}
    </button>
  );
};

export default Button;
