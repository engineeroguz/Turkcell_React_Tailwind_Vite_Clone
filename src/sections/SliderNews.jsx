import Carousel from "../components/Carousel";
import { slides } from "../constants";

const SliderNews = () => {
  return (
    <main className=" mt-7">
      <div className="max-w-7xl">
        <Carousel autoSlide={false} autoSlideInterval={1000}>
          {slides.map((s) => (
            <img className="rounded-3xl" src={s} alt="news" />
          ))}
        </Carousel>
      </div>
    </main>
  );
};

export default SliderNews;
