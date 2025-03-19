
const YourSchedule = () => {
    const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00"];
    return (
        <div className="bg-white rounded-[80px] shadow-lg w-full h-full px-8 py-6 flex flex-col relative">
            {/* Header section */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-black">
                    Your<br />Schedule
                </h2>
                <div className="bg-green-400 text-white px-6 py-3 rounded-full text-lg">
                    Complete taks
                </div>
            </div>

            {/* Vertical time grid lines */}
            <div className="relative flex-grow">
                {/* Vertical dashed lines */}
                <div className="absolute inset-0 flex justify-between">
                    {timeSlots.map((time, index) => (
                        <div key={index} className="h-full border-l border-dashed border-gray-300" />
                    ))}
                </div>

                {/* Time labels at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                    {timeSlots.map((time, index) => (
                        <div key={index} className="text-gray-500 text-sm">{time}</div>
                    ))}
                </div>

                {/* Here you can add task items positioned absolutely */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-orange-400 rounded-full px-6 flex items-center">
                    <span className="text-white font-medium">Taks 1</span>
                </div>
            </div>
        </div>
    );
};

export default YourSchedule
