import studySyncLogo from '../../../assets/logo-study-sync.png'
import togaLogo from '../../../assets/logo-toga.png'
function RegisterHeader() {
  return (
    <>
      {/* Header */}
      <header className="flex justify-center align-items-center ml-14">
        <div className="flex flex-col gap-2 mr-2.5 mt-[63px]">
          <h1 className="text-6xl font-bold text-[#E8886B]">Login</h1>
          <img
            src={studySyncLogo}
            alt="Study Sync Logo"
            className="w-md inline-block"
          />
        </div>
        <div className="w-3xs ml-16 mt-[63px]">
          <img src={togaLogo} alt="Toga Logo" className="w-35 " />
        </div>
      </header>
    </>
  )
}

export default RegisterHeader
