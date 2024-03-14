import {
  mobil_programlama,
  veri_bilimi,
  veri_tabani_programlama,
  oyun_programlama,
  web_programlama,
} from "../assets/images";

const FuturePaths = () => {
  return (
    <section className="pr-56 pl-32">
      <div className="text-center mb-16">
        <h1 className="text-[#253342] text-[42px] font-bold leading-5 mb-16">
          Geleceğinize Nasıl Şekil Verebilirsiniz?
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-44">
        <div className="flex flex-col items-center">
          <div className="h-52 w-52 background-image rounded-full flex justify-center items-center mb-8 ">
            <img
              className=" w-auto max-h-32"
              src={mobil_programlama}
              alt="Mobil Programlama"
            />
          </div>
          <h3 className="#4a4a4a text-xl font-semibold text-[#4a4a4a]">
            Mobil Programlama
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-52 w-52 background-image rounded-full flex justify-center items-center mb-8">
            <img
              className=" w-auto max-h-32"
              src={veri_bilimi}
              alt="Veri Bilimi"
            />
          </div>
          <h3 className="#4a4a4a text-xl font-semibold text-[#4a4a4a]">
            Veri Bilimi
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-52 w-52 background-image rounded-full flex justify-center items-center mb-8">
            <img
              className=" w-auto max-h-32"
              src={veri_tabani_programlama}
              alt="Veri Tabanı Programlama"
            />
          </div>
          <h3 className="#4a4a4a text-xl font-semibold text-[#4a4a4a]">
            Veri Tabanı Programlama
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-52 w-52 background-image rounded-full flex justify-center items-center mb-8">
            <img
              className=" w-auto max-h-32"
              src={oyun_programlama}
              alt="Oyun Programlama"
            />
          </div>
          <h3 className="#4a4a4a text-xl font-semibold text-[#4a4a4a]">
            Oyun Programlama
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-52 w-52 background-image rounded-full flex justify-center items-center mb-8">
            <img
              className=" w-auto max-h-32"
              src={web_programlama}
              alt="Web Programlama"
            />
          </div>
          <h3 className="#4a4a4a text-xl font-semibold text-[#4a4a4a]">
            Web Programlama
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FuturePaths;
