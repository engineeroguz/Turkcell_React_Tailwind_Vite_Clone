import { logo } from "../assets/images";
import Button from "./Button";
import { search } from "../assets/icons";

const Nav = () => {
  return (
    <header className="h-24 bg-white w-full">
      <nav className="flex justify-between items-center h-full pr-56 pl-32">
        <div>
          <img src={logo} alt="logo" width={300} />
        </div>
        <div className="flex justify-center gap-20 items-center">
          <ul className="flex ">
            <li className="text-[#253342] space-x-10 font-bold">
              <a href="#">Forum</a>
              <a href="#">Blog</a>
              <a href="#">Eğitimler</a>
              <a href="#">Topluluk</a>
              <a href="#">İş İlanları</a>
            </li>
          </ul>
          <Button label={"Giriş Yap"}>aaaaaaaaaaaaa</Button>
          <img width={25} src={search} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
