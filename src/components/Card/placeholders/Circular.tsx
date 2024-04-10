type CircularProps = {
  avatarImageUrl?: string;
  circleStyles?: string;
};
const Circular = ({ avatarImageUrl, circleStyles }: CircularProps) => {
  return (
    <div className="flex-shrink-0">
      {avatarImageUrl ? (
        <img
          src={avatarImageUrl}
          alt="Image"
          className="w-12 h-12 rounded-full object-cover shadow-md"
          style={{ objectFit: "cover" }} // Ensure the image fills the circular container without affecting its shape
        />
      ) : (
        <div className={circleStyles}></div>
      )}
    </div>
  );
};

export default Circular;
