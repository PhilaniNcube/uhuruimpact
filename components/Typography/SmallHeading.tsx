type TypographyProps = {
  text: string;
  position?: string;
  color: string;
};

const SmallHeading = ({ text, position = "", color }: TypographyProps) => {
  return (
    <span
      className={`text-[3ppx] md:text-[40px] font-bold ${color} ${position}`}
    >
      {text}
    </span>
  );
};
export default SmallHeading;
