import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
    const [displayMenu, setDisplayMenu] = useState(true)


    return (
        <header className='body bg-white flex justify-between items-center mb-5 pt-4 border-b-2 fixed top-0 right-0 left-0'>
            
            <Link to="/"className='title'>Food Villa</Link>

            <nav className={``}>
                <ul className={`lg:flex md:flex xl:flex justify-center items-center nav-mobile ${displayMenu ? 'hidden' : 'flex'}`}>
                    <li><NavLink className='nav-link' to="/">Home</NavLink></li>
                    <li><NavLink className='nav-link' to="cart">Cart</NavLink></li>
                    {/* <li><NavLink className='nav-link'  to="about">About</NavLink></li>
                    <li><NavLink className='nav-link' to="service">Service</NavLink></li>
                    <li><NavLink className='nav-link' to="contact">Contacts</NavLink></li> */}
                </ul>
            </nav>

            <div className='flex justify-center items-center gap-2'>
                <Link to='cart'><button className='p-2 rounded text-xl'><i className="bi bi-basket"></i></button></Link>
                <button onClick={() => setDisplayMenu(!displayMenu)} className={`p-2 rounded text-3xl max-sm:block hidden`}><i className="bi bi-list"></i></button>
            </div>
            

        </header>
    )
}

export default Header