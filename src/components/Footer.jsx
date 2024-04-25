// import { Link } from 'react-router-dom'

function Footer() {
    return (
        

        <footer className="bg-white card-shadow">
            <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">FoodVilla</h2>
                    <ul className="text-gray-900 font-medium">
                        <li className="mb-4">
                            <a href="#about" className="hover:underline">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="#blog" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Help center</h2>
                    <ul className="text-gray-900 font-medium">
                        <li className="mb-4">
                            <a href="#twitter" className="hover:underline">Twitter</a>
                        </li>
                        <li className="mb-4">
                            <a href="#facebook" className="hover:underline">Facebook</a>
                        </li>
                        <li className="mb-4">
                            <a href="#contact" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                    <ul className="text-gray-900  font-medium">
                        <li className="mb-4">
                            <a href="#privacy" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li className="mb-4">
                            <a href="#licensing" className="hover:underline">Licensing</a>
                        </li>
                        <li className="mb-4">
                            <a href="#terms" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Download</h2>
                    <ul className="text-gray-900 font-medium">
                        <li className="mb-4">
                            <a href="#ios" className="hover:underline">iOS</a>
                        </li>
                        <li className="mb-4">
                            <a href="#android" className="hover:underline">Android</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-4 py-6  md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-900 text-center">© 2023 <a href="/">FoodVilla</a>. All Rights Reserved.</span>
            </div>
            </div>
        </footer>

    )
}

export default Footer