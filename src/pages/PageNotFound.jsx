import { Link } from 'react-router-dom'


function PageNotFound() {
    return (
        <section className='body h-[70vh] mt-10'>

            <div className='flex flex-col justify-center items-center gap-4 mt-32'>
                <img src="./assets/others/page_not_found.svg" alt="" className='w-64 max-sm:w-76 max-sm:mx-auto' />
                <div className='text-center my-10'>
                    <h1 className='text-4xl font-bold pb-2'>Oops!</h1>
                    <p className='text-2xl'>
                        We Could not find the page you looking for....
                    </p>
                    <Link to='/'>
                        <button className='bg-blue-400 py-2 px-4 mt-6 rounded-lg text-white'>Go Home</button>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default PageNotFound