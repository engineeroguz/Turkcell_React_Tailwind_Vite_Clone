const Card = ({ blogImg, h3, p, tag1, tag2 }) => {
  return (
    <div className="rounded-t-3xl h-96 flex flex-col justify-between bg-white w-fit shadow-2xl">
      <div>
        <img
          className="rounded-t-3xl mb-7 max-w-full h-auto block"
          src={blogImg}
          alt="blog_1"
        />
      </div>
      <div className="flex flex-col pl-5 pb-10">
        <h3 className="text-[#253342] text-lg font-bold mb-3">{h3}</h3>
        <p className="text-[#5f6b76] text-sm font-medium mb-5">{p}</p>
        <div>
          <button className="bg-[#ecf0f2] mr-3  px-4 h-10 rounded-3xl text-center text-[#5f6b76] font-medium overflow-hidden">
            {tag1}
          </button>
          <button className="bg-[#ecf0f2] mr-3  px-4 h-10 rounded-3xl text-center text-[#5f6b76] font-medium overflow-hidden">
            {tag2}
          </button>
        </div>
      </div>
      <span className="border-t border-gray-500"></span>
      <div className="pl-5 mt-5 h-full">
        <a className=" w-full text-[#2855ac] h-16 font-bold text-lg" href="#">
          Devamını Oku
        </a>
      </div>
    </div>
  );
};

export default Card;
