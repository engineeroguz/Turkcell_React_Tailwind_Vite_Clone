import { useEffect } from "react";
import { useState } from "react";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-3 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
        >
          {"<"}
        </button>
        <div className="relative left-5 w-full">
          <h2 className="text-[40px] text-white font-bold leading-[1.2] mb-[24px] relative z-[3] max-w-[700px]">
            Siber Güvenlik El Kitabı"nı okuyun, dijital dünyada güvende olun!
          </h2>
          <p className="text-[24px] text-white leading-[1.2em] max-w-[700px] mb-[40px] relative z-[3]">
            71 kadının yazdığı, Siber Güvenliğin Süper Kadınları programının
            ürünü "Siber Güvenlik El Kitabı" yayımlandı. Bu kitaptan siber
            güvenliğe dair temel bilgileri öğrenin ve dijital dünyada kendinizi
            koruma altına alın.
          </p>
          <a
            className="bg-white min-w-[220px] font-bold relative z-[3] flex-shrink-0 h-[3.125rem] leading-[3.125rem] mb-[20px] px-[5rem] py-[1rem] rounded-2xl"
            href="#"
          >
            İncele
          </a>
        </div>
        <button
          onClick={next}
          className="p-3 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
        >
          {">"}
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex justify-center items-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
