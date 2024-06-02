import { useContext, useState } from 'react'
import {Link} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { UserContext } from '../context/UserContext';


function Header() {
    const [displayMenu, setDisplayMenu] = useState(true)
    
    const handleScroll = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    const { currentUser, setCurrentUser } = useContext(UserContext)

    function handleSignOut () {
        signOut(auth)
        localStorage.removeItem("token")
        setCurrentUser(false)
        window.location.reload()
    }

    return (
        <header className='body bg-white flex justify-between items-center mb-5 pt-4 border-b-2 fixed top-0 right-0 left-0'>
            
            <Link to="/"className='title'>Food Villa</Link>

            <nav className={``}>
                <ul className={`lg:flex md:flex xl:flex justify-center items-center nav-mobile ${displayMenu ? 'hidden' : 'flex'}`}>
                    <li><Link className='nav-link' to="/" onClick={(e) => handleScroll(e, 'home')}>Home</Link></li>
                    <li><Link className='nav-link' to="/service" onClick={(e) => handleScroll(e, 'service')}>Services</Link></li>
                    <li><Link className='nav-link' to="/about" onClick={(e) => handleScroll(e, 'about')}>About</Link></li>
                    <li><Link className='nav-link' to="/contacts" onClick={(e) => handleScroll(e, 'contact')}>Contacts</Link></li>
                </ul>
            </nav>

            <div className='flex justify-center items-center gap-2'>
                <Link to='cart'><button className='px-2 py-1 rounded text-xl bg-red-400 text-white'><i className="bi bi-cart4"></i></button></Link>
                {
                    currentUser ? (
                        <button onClick={handleSignOut} className='max-sm:hidden flex item-center gap-2 border-2  px-4 py-2 text-gray-700 font-bold rounded-md'>SignOut</button>
                    ) : (
                        <>
                            <Link to='Register'><button className='max-sm:hidden flex item-center gap-2 bg-blue-400 px-4 py-2 text-white font-bold rounded-md'>Register</button></Link>
                            <Link to='login'><button className='max-sm:hidden flex item-center gap-2 border-2  px-4 py-2 text-gray-700 font-bold rounded-md'>Login</button></Link>
                        </>

                    )
                }
                <button onClick={() => setDisplayMenu(!displayMenu)} className={`p-2 rounded text-3xl max-sm:block hidden`}><i className="bi bi-list"></i></button>
            </div>
            

        </header>
    )
}

export default Header