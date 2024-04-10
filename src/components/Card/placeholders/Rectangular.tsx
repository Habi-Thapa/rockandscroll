type RectangularProps = {
  rectangleStyles?: string;
  imageUrl?: string;
};

const Rectangular = ({ rectangleStyles, imageUrl }: RectangularProps) => {
  return (
    <div className={rectangleStyles}>
      {imageUrl ? ( // Check if imageUrl is provided
        <img
          src={imageUrl}
          alt="Image"
          className="w-full h-full object-cover rounded-2xl"
          style={{ objectFit: "cover" }}
        />
      ) : null}
    </div>
  );
};

export default Rectangular;
