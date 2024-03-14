import Button from "../components/Button";

const JoinUs = () => {
  return (
    <section className="pr-56 pl-32">
      <div className="text-center mb-16 ">
        <h1 className="text-[#253342] text-[42px] font-bold leading-5 mb-16">
          Aramıza katıl!
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[#253342] leading-6 mb-10 text-center text-2xl">
          Geleceği Yazanlar portalına üye olarak, uygulama geliştiricilere
          sağlanacak olan pek çok avantajdan faydalanabilir ve etkinliklerden
          haberdar olabilirsin!
        </p>
        <Button label={"Üye ol"} />
      </div>
    </section>
  );
};

export default JoinUs;
