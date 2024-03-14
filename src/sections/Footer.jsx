import { facebook, twitter, instagram, youtube } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="">
      <div className="mr-56 ml-32 pb-12">
        <div className="grid grid-cols-4">
          <div className="flex flex-col text-white space-y-5">
            <a href="#">Eğitimler</a>
            <a href="#">Veri Bilimi Eğitimi</a>
            <a href="#">Android Eğitimi</a>
            <a href="#">Java Eğitimi</a>
            <a href="#">Web Programlama Eğitimi</a>
          </div>
          <div className="flex flex-col text-white space-y-5">
            <a href="#">Temel Network Eğitimi</a>
            <a href="#">Blog</a>
            <a href="#">Firebase Nedir?</a>
            <a href="#">Bug Bounty Nedir?</a>
            <a href="#">Python Kütüphanesi</a>
          </div>
          <div className="flex flex-col text-white space-y-5">
            <a href="#">Açık Kaynak Kodlu Yazılım</a>
            <a href="#">QR Kod Okuma</a>
            <a href="#">Sosyal Programlarımız</a>
            <a href="#">Dijital Okuryazarlık</a>
            <a href="#">Hakkımızda</a>
          </div>
          <div className="flex flex-col text-white space-y-5">
            <a href="#">Kullanım Şartları</a>
            <a href="#">Gizlilik Politikası</a>
            <a href="#">SSS</a>
            <a href="/">Bize Ulaşın</a>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#253342]">
        <div className="flex justify-between items-center pr-56 pl-32 mt-5">
          <p className="text-[14px] text-white opacity-50 font-medium">
            © 2024&nbsp;Copyright Turkcell
          </p>
          <ul className="flex items-center justify-center">
            <li className=" text-white font-medium mr-5">Bizi Takip Edin</li>
            <li className="flex space-x-3 items-center">
              <li>
                <a href="">
                  <img width={35} src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <img width={35} src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="">
                  <img width={35} src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <img width={35} src={youtube} alt="youtube" />
                </a>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
