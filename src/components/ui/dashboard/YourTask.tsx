import timeline from '../../../assets/Group 47.png'

const YourTask = () => {
  return (
    <div className="relative bg-[#E8886B] rounded-[80px] w-full h-full px-8 py-6 shadow-lg">
      <header>
        <h1 className="text-3xl text-white mb-[40px] leading-tight">
          Your <br />
          Task
        </h1>
      </header>
      {/* Day */}
      <div className="flex flex-col items-center">
        <section className="grid grid-cols-6 gap-4 w-[95%]  mb-4 overflow-hidden">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div
              key={index}
              className="h-20 sm:h-24 bg-white p-3 rounded-full flex flex-col items-center justify-center text-lg font-medium text-gray-800 shadow-md"
            >
              {day} <br />
              <span className="font-light text-sm sm:text-base">{14 + index}</span>
            </div>
          ))}
        </section>
      </div>
      <img src={timeline} alt="Task Timeline" className="w-full" />
    </div>
  );
};

export default YourTask
