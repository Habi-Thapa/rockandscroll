type TitleProps = {
  titleText?: string;
};

const Title = ({ titleText }: TitleProps) => {
  return (
    <div className="h-4 bg-gradient-to-br from-rose-400 to-rose-300 rounded mb-2 w-[100%]  shadow-lg ">
      {titleText}
    </div>
  );
};

export default Title;
