import {
  dunyanin_egitimi_burada,
  sen_de_yerini_al,
  kariyer_firsatlarini_yakala,
} from "../assets/images";

const CareerDream = () => {
  return (
    <div className="grid grid-cols-3 gap-8 pr-56 pl-32 relative top-0 ">
      <div className="flex flex-col items-center">
        <img
          className="object-cover mb-10"
          height={120}
          width={145}
          src={dunyanin_egitimi_burada}
          alt=""
        />
        <h3 className="text-[#4a4a4a] text-[24px] font-bold leading-5 mb-10 text-center">
          Dünyanın eğitimi burada!
        </h3>
        <p className="text-[#8e9fad] text-[18px] font-semibold leading-6 mb-4 text-center">
          Binlerce saat eğitim ve zengin sertifika programı ile her gün kendini
          geliştir.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="object-cover mb-10"
          height={120}
          width={145}
          src={sen_de_yerini_al}
          alt=""
        />
        <h3 className="text-[#4a4a4a] text-[24px] font-bold leading-5 mb-10 text-center">
          Türkiye’nin en büyük yazılım topluluğunda sen de yerini al!
        </h3>
        <p className="text-[#8e9fad] text-[18px] font-semibold leading-6 mb-4 text-center">
          Teknoloji konulu blog, etkinlik ve yarışmalar ile trendleri yakından
          takip ederken, binlerce soru-cevap içeriğiyle öğrendiklerini geliştir!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="object-cover mb-10"
          height={120}
          width={145}
          src={kariyer_firsatlarini_yakala}
          alt=""
        />
        <h3 className="text-[#4a4a4a] text-[24px] font-bold leading-5 mb-10 text-center">
          Hayalindeki kariyer fırsatlarını yakala!
        </h3>
        <p className="text-[#8e9fad] text-[18px] font-semibold leading-6 mb-4 text-center">
          Uzmanlığını eğitimlerimiz ile geliştir, kariyerinde yeni bir sayfa aç!
        </p>
      </div>
    </div>
  );
};

export default CareerDream;
