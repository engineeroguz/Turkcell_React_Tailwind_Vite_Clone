import SuccessStories from "../components/SuccessStories";
import { hikaye_1, hikaye_2, hikaye_3 } from "../assets/images";
import { stories } from "../constants";

const Stories = () => {
  return (
    <section>
      <div className="text-center mb-16">
        <h1 className="text-[#253342] text-[42px] font-bold leading-5 mb-16">
          Başarı Hikayeleri
        </h1>
      </div>
      <div className="grid grid-cols-3 pr-56 pl-32 gap-16 leading-6">
        <SuccessStories
          img={hikaye_1}
          h3={stories[0].h3}
          h4={stories[0].h4}
          p={stories[0].p}
        />
        <SuccessStories
          img={hikaye_2}
          h3={stories[1].h3}
          h4={stories[1].h4}
          p={stories[1].p}
        />
        <SuccessStories
          img={hikaye_3}
          h3={stories[2].h3}
          h4={stories[2].h4}
          p={stories[2].p}
        />
      </div>
    </section>
  );
};

export default Stories;
