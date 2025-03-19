import LoginHeader from '../components/ui/login/LoginHeader'
import LoginForm from '../components/ui/login/LoginForm'
/*
Base Color: #E8886B 
Secondary Color: #F4F4F4
*/
function Login() {
  return (
    <div className="bg-[#E8886B] h-screen w-full ">
      <main className="login w-1/2 bg-[#F4F4F4] h-full rounded-tr-[2.2rem] shadow-2xl">
        <LoginHeader />
        <LoginForm />
      </main>
    </div>
  )
}

export default Login
