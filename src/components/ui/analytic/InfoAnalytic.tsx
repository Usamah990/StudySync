
const InfoAnalytic = () => {
  return (
    <div className="flex-1/4 ">
      <div className="box bg-white relative shadow-md rounded-[25px] p-8">
        <h1>Tugas Hari ini</h1>
        <div className="boxdata rounded-[15px] my-2 w-max p-2  bg-[#E6DFD3]  items-center">
          <h1 className="text-lg">Kalkulus 1</h1>
          <h2 className="text-lg">10.00-22.00</h2>
        </div>
        <div className="boxbelum bg-[#E8886B] rounded-2xl p-3">
          <h1 className="max-w-[8rem] text-white text-md">
            Tugas yang sudah dikerjakan
          </h1>
          <div className="">
            <div className="boxdata rounded-[15px] my-2 w-max p-2 bg-[#E6DFD3]">
              <h1 className="text-lg">Kalkulus 1</h1>
              <h2 className="text-lg">10.00-22.00</h2>
            </div>
          </div>
        </div>
        <div className="h-32">
          <img
            src="./images/Group 36.png"
            className="absolute bottom-0 right-0 w-[30%]"
            alt=""
          />
           <img
            src="./images/bitcoin-icons_graph-filled.png"
            className="absolute bottom-2 left-2 w-[36%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default InfoAnalytic;
