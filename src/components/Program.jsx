const Program = ({ prog, head }) => {
  let prog1 = prog;
  return (
    <div className="flex flex-col items-center">
      <img width={300} height={300} className=" rounded-full" src={prog1} />
      <h3 className="text-[#4a4a4a] text-2xl font-bold mt-10">{head}</h3>
    </div>
  );
};

export default Program;
/*
<div className="flex flex-col items-center">
          <img
            width={300}
            height={300}
            className=" rounded-full"
            src={sosyal_program_1}
          />
          <h3 className="text-[#4a4a4a] text-2xl font-bold mt-10">
            Geleceği Yazan Kadınlar
          </h3>
        </div>*/
