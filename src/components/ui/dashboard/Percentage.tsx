import percentageZero from '../../../assets/percentage-zero.png'
const Percentage = () => {
  return (
    <div className="bg-[#101010] rounded-3xl overflow-hidden shadow-2xl w-full h-full flex flex-col justify-center items-center relative">
      <div className="w-[350px] h-[200px]">
        <img src={percentageZero} alt="Percentage Background" className="w-full h-full ms-4 mt-8" />
      </div>
      <div className="absolute text-center text-white">
        <p className="font-bold text-6xl">50%</p>
      </div>
    </div>
  );
};

export default Percentage