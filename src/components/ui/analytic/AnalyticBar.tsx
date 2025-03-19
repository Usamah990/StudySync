
const AnalyticBar = () => {
  return (
    <div className="flex-1/2">
      <h1>Your Peformance</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 h-[95%] w-full ">
        <div className="flex justify-between items-center mb-4">
       <div className=""></div>
          <span className="text-sm">10-17 Agustus 2025</span>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-sm font-bold">
            <span>100 %</span>
            <span>50 %</span>
            <span>0 %</span>
          </div>
          <div className="ml-10 grid grid-cols-7 gap-4 h-80 items-end">
            <div className="flex flex-col h-full items-center">
              <div
                className="bg-red-400 h-full w-20 rounded-t-lg"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, #E36F4B, #E36F4B 10px, #E8886B 10px, #E8886B 20px)",
                }}
              ></div>
            </div>
            <div className="flex flex-col h-full items-center">
              <div
                className="bg-red-400 h-full w-20 rounded-t-lg"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, #E36F4B, #E36F4B 10px, #E8886B 10px, #E8886B 20px)",
                }}
              ></div>
            </div>
            <div className="flex flex-col h-full items-center">
              <div
                className="bg-red-400 h-full w-20 rounded-t-lg"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, #E36F4B, #E36F4B 10px, #E8886B 10px, #E8886B 20px)",
                }}
              ></div>
            </div>
            <div className="flex flex-col h-full items-center">
              <div
                className="bg-red-400 h-full w-20 rounded-t-lg"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, #E36F4B, #E36F4B 10px, #E8886B 10px, #E8886B 20px)",
                }}
              ></div>
            </div>
            <div className="flex flex-col h-full items-center">
              <div
                className="bg-red-400 h-full w-20 rounded-t-lg"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, #E36F4B, #E36F4B 10px, #E8886B 10px, #E8886B 20px)",
                }}
              ></div>
            </div>
            <div className="flex flex-col h-full items-center">
              <div
                className="bg-red-400 h-full w-20 rounded-t-lg"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, #E36F4B, #E36F4B 10px, #E8886B 10px, #E8886B 20px)",
                }}
              ></div>
            </div>
            <div className="flex flex-col h-full items-center">
              <div
                className="bg-red-400 h-full w-20 rounded-t-lg"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, #E36F4B, #E36F4B 10px, #E8886B 10px, #E8886B 20px)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="day flex gap-[80px] justify-center items-center ml-14">
          <span>Senin</span>
          <span>Selasa</span>
          <span>Rabu</span>
          <span>Kamis</span>
          <span>Jumat</span>
          <span>Sabtu</span>
          <span>Minggu</span>

        </div>
      </div>
    </div>
  );
};

export default AnalyticBar;
