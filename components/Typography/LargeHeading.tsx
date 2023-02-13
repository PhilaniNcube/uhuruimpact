type TypographyProps = {
  text: string;
  width?: string;
  color: string;
};

const LargeHeading = ({ text, color = "text-dark-blue", width }: TypographyProps) => {
  return (
    <h1
      className={`text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-10 ${color}`}
    >
      {text}
    </h1>
  );
};
export default LargeHeading;
