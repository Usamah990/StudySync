import RegisterHeader from '../components/ui/register/RegisterHeader'
import RegisterForm from '../components/ui/register/RegisterForm'
function Register() {
  return (
    <>
      <div className="bg-[#E8886B] h-auto w-full ">
        <main className="w-1/2 bg-[#F4F4F4] h-full rounded-tr-[2.2rem] shadow-2xl">
          <RegisterHeader/>
          <RegisterForm/>
        </main>
      </div>
    </>
  )
}

export default Register
