type TypographyProps = {
  text: string,
  position?:string,
  size: string
}

const Watermark = ({text, position = '', size }:TypographyProps) => {
  return (
    <span className={`font-bold text-very-light-grey tracking-wide leading ${position} ${size}`}>
      {text}
    </span>
  );
};
export default Watermark;
