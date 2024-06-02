import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase/config'
import { useState } from 'react';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [inputs, setInputs] = useState({})
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, inputs.email, inputs.password).then((res) => {
            toast.success('You have created an account😍')
            navigate('/login')
        }).catch(e => toast.error("Could not Create An account"))
    }
    return (
        <section className='body h-screen mt-32'>
            <h1 className='text-2xl font-bold text-center pt-5 pb-10'>Register Your Account</h1>
            <form onSubmit={handleRegister} className="max-w-lg mx-auto shadow-lg p-8">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input type="email" id="email" onChange={(e) => setInputs({...inputs, email: e.target.value})}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                    <input type="password" id="password" onChange={(e) => setInputs({...inputs, password: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='password' required />
                </div>
                <button onClick={handleRegister} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Register</button>
            </form>
    </section>
    )
}

export default SignUp