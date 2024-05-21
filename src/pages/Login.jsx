import { useContext, useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase/config'
import { UserContext } from '../context/UserContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [inputs, setInputs] = useState({})
    const { setCurrentUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, inputs.email, inputs.password).then((res)=> {
            console.log(res);
            const userToken = res.user.accessToken;
            localStorage.setItem('token', userToken)
            setCurrentUser(true)
            toast.success("welcome")
            navigate('/')
        }).catch((e) => toast.error("unable to login"))
    }

    return (
        <section className='body h-screen mt-32'>
            <h1 className='text-2xl font-bold text-center pt-5 pb-10'>Login</h1>
            <form onSubmit={handleLogin} className="max-w-lg mx-auto shadow-lg p-8">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input type="email" id="email" onChange={(e) => setInputs({...inputs, email: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                    <input type="password" id="password" onChange={(e) => setInputs({...inputs, password: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='password' required />
                </div>
                <button onClick={handleLogin} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </section>
    )
}

export default Login