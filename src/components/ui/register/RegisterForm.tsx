import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://192.3.193.173/api/auth/register'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
    confirm_password: '',
  })

  const [loading, setLoading] = useState(false) // State untuk spinner
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirm_password) {
      alert('Password dan konfirmasi password harus sama!')
      return
    }

    setLoading(true) // Aktifkan spinner

    try {
      const response = await axios.post(
        URL,
        {
          username: formData.username,
          phone: formData.phone,
          password: formData.password,
          password_confirmation: formData.confirm_password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Registrasi berhasil! Silakan login.',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })

      setTimeout(() => {
        navigate('/login')
      }, 1500)
    } catch (error) {
      console.error('Error registrasi:', error)
      Swal.fire({
        icon: 'error',
        title: 'Registrasi gagal',
        text: 'Coba lagi nanti!',
      })
    } finally {
      setLoading(false) // Matikan spinner setelah request selesai
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-md p-4 rounded-lg ml-14 mt-6">
      {['username', 'phone', 'password', 'confirm_password'].map((field) => (
        <div key={field} className="flex flex-col mb-4">
          <label
            className="text-[#474747] mb-2 font-medium text-xl"
            htmlFor={field}
          >
            {field === 'confirm_password'
              ? 'Confirmation Password'
              : field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field.includes('password') ? 'password' : 'text'}
            id={field}
            name={field}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            className="w-full p-2 pl-10 text-lg text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 bg-white shadow-md"
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full p-3 bg-[#E8886B] text-white rounded-lg hover:bg-[#db9079] focus:outline-none focus:ring-2 focus:ring-gray-600 hover:cursor-pointer flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full"
            viewBox="0 0 24 24"
          ></svg>
        ) : (
          'Register'
        )}
      </button>
    </form>
  )
}

export default RegisterForm
