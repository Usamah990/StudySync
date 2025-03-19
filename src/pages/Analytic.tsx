import InfoAnalytic from '../components/ui/analytic/InfoAnalytic'
import AnalyticBar from '../components/ui/analytic/AnalyticBar'
import NotifAn from '../components/ui/analytic/NotifAn'
import Quotes from '../components/ui/analytic/Quotes'
const Analytic = () => {
  return (
    <div className="w-full h-screen bg-[#EEEAE7] ">
      <main>
        <section className="flex pt-6 px-4 gap-5">
          <InfoAnalytic />
          <AnalyticBar />
        </section>
        <section className="flex pt-6 px-4 gap-5 ">
          <NotifAn />
          <Quotes />
        </section>
      </main>
    </div>
  )
}

export default Analytic
