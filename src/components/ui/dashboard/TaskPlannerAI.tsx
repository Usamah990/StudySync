const TaskPlannerAI = () => {
  return (
    <div className="bg-gradient-to-r from-[#FF6434] to-[#000937] rounded-3xl shadow-2xl w-full h-[100%] flex flex-row justify-center items-center p-4 relative overflow-hidden">
      <span className="absolute top-0 left-0 mt-4">
        <img src="./images/mask.png" width={"100px"} alt="" />
      </span>
      <div className="text-start ps-10 text-white">
        <p className="font-bold leading-2 text-2xl">
          Task <span><img src="./images/Adobe_Illustrator.png" className='ms-2 inline' width={"35px"} /></span>
        <br />
          Planner
        </p>
      </div>
    </div>
  );
};

export default TaskPlannerAI
