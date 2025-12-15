const Cards = ({ image, number, name, description, review_image }) => {
  return (
    <div className="border border-[#f5f8fb] w-100 h-auto bg-white px-10 pt-10 pb-5 rounded-xl">
      <div className="flex flex-row items-center space-x-2">
        {image && <img src={image} className="w-20 h-20" />}

        {number && <p className="text-sm">{number}</p>}

        <p className="text-[#1877f2] text-lg font-semibold">{name}</p>
      </div>
      <p className="text-[#65707b] text-md font-semibold mt-5">{description}</p>

      {review_image && <img src={review_image} className="w-30 h-30 mt-10" />}
    </div>
  );
};

export default Cards;
