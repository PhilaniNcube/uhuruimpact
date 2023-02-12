type TypographyProps = {
  text: string;
  position?: string;
  color: string
};

const MediumHeading = ({ text, position = "", color }: TypographyProps) => {
  return (
    <span
      className={`text-4xl md:text-6xl font-bold ${color} tracking-tight ${position}`}
    >
      {text}
    </span>
  );
};
export default MediumHeading;
