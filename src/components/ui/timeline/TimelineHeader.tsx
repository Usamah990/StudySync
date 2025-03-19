import React from 'react'
import information from '../../../assets/i.svg'
import trash from '../../../assets/basil_trash-outline.svg'
import pencil from '../../../assets/mdi_pencil-outline.svg'
import add from '../../../assets/add.svg'

function TimelineHeader() {
  return (
    <>
      <header className='p-4'>
        {/* Date */}
        <h1 className='text-2xl '>Hari ini</h1>
        <h2 className="text-[#D93A09] text-xl">Senin, 10 Oktober 2025</h2>

        {/* Icons */}
        <div className="flex justify-end gap-3">
          <button className="bg-[#FFDCA0] w-[8rem] p-4 rounded-2xl border-4 cursor-pointer">
            <div className="flex justify-center items-center">
              <a href="">
                <img src={information} alt="information" className="w-2" />
              </a>
            </div>
          </button>
          <button className="bg-[#85B4E3] w-[5rem] p-4 rounded-2xl border-4">
            <a href="">
              <img src={pencil} alt="Edit" />
            </a>
          </button>
          <button className="bg-[#D93A09] w-[5rem] p-4 rounded-2xl border-4">
            <a href="">
              <img src={trash} alt="Delete" />
            </a>
          </button>
          <div className='ml-8'>
            <button className="bg-[#FFDCA0] w-[5rem] p-4 rounded-2xl border-4">
              <a href="">
                <img src={add} alt="Delete" className="w-xs" />
              </a>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default TimelineHeader
