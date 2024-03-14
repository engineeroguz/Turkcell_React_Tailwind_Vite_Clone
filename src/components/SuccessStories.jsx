const SuccessStories = ({ img, h3, h4, p }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img className="mb-8" src={img} alt="" />
        <h3 className="text-[#4a4a4a] text-xl font-bold">{h3}</h3>
        <h4 className="text-[#8e9fad] text-lg font-normal mb-5">{h4}</h4>
        <p className="text-[#8e9fad] max-w-full font-medium text-center">{p}</p>
      </div>
    </div>
  );
};

export default SuccessStories;
