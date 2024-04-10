type SubTitleProps = {
  subTitleText?: string;
};

const SubTitle = ({ subTitleText }: SubTitleProps) => {
  return (
    <div className="h-3 bg-gradient-to-br from-rose-400 to-rose-300 rounded w-1/2  shadow-lg ">
      {subTitleText}
    </div>
  );
};

export default SubTitle;
