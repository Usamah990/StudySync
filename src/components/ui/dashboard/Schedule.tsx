import React from 'react'

function Schedule() {
  return (
    <>
      <div className="bg-white left-0 top-0 right-0 flex justify-center items-center">
        <div className="w-[20%] h-[15%] bg-white rounded-full flex items-center shadow-xl">
          <div className="h-[74%] w-[25%] bg-black rounded-full ml-5 flex justify-center items-center">
            <p className="text-white text-5xl font-bold">15</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold ml-5">Tuesday</p>
            <p className="font-semibold text-xl ml-5 text-black/40">
              January, 2025
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Schedule
