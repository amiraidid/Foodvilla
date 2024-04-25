import { useState } from "react"




function Contact() {

    const [inputData, setInputData] = useState('');

    function handleForm (event) {
        event.preventDefault()

        const data = event.target.name.value;
        console.log(data)
    }

    return (
        <section className='body mt-10 mb-4' id='contact'>
            <div className='flex flex-col justify-center items-center mx-auto'>
                <h1 className='text-4xl pb-4 text-center'>Contact Us </h1>
                <form className='block' onSubmit={handleForm}>
                    <input className='outline-none' type="text" placeholder='Full Name...' autoComplete='off' name='name' value={inputData} onChange={() => setInputData()} /><br />
                    <input className='outline-none' type="email" placeholder='Your Email...' autoComplete='off' name='email'  /><br />
                    <input className='outline-none' type="text" placeholder='Your Subject..' autoComplete='off' name='subject'  /><br />
                    <textarea  className='outline-none' name="" id="" cols="30" rows="10"></textarea><br />
                    <input type="submit" value="SUBMIT" className='bg-blue-500 text-white cursor-pointer shadow-amber-50'/>
                </form>

            </div>


        </section>
    )
}

export default Contact