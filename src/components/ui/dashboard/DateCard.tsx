const DateCard = () => {
  return (
    <div className="bg-white rounded-full shadow-2xl w-full h-[80%] flex items-center justify-center">
      <div className="w-full h-full bg-white rounded-full flex items-center px-4">
        <div className="h-16 w-16 bg-black rounded-full flex justify-center items-center">
          <p className="text-white text-3xl mb-2 font-bold">15</p>
        </div>
        <div className="flex flex-col justify-center ml-4">
          <p className="text-2xl font-bold">Tuesday</p>
          <p className="font-semibold text-base text-black/40">
            January, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateCard
