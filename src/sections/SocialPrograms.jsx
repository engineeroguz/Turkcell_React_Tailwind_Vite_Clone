import {
  sosyal_program_1,
  sosyal_program_2,
  sosyal_program_3,
} from "../assets/images";
import Program from "../components/Program";

const SocialPrograms = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="text-[#253342] text-[42px] font-bold leading-5 mb-16">
          Sosyal Programlar
        </h1>
      </div>
      <div className="grid grid-cols-3">
        <Program prog={sosyal_program_1} head={"Geleceği Yazan Kadınlar"} />
        <Program
          prog={sosyal_program_2}
          head={"Gençlere Yatırım, Geleceğe Yazılım"}
        />
        <Program
          prog={sosyal_program_3}
          head={"Siber Güvenliğin Süper Kadınları"}
        />
      </div>
    </div>
  );
};

export default SocialPrograms;
