import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase/config';


const NavBar = ({ displayMenu }) => {
}
function Header() {
    const [displayMenu, setDisplayMenu] = useState(true)
    const handleScroll = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuthed')) || false)


    function handleLogin () {
        signInWithPopup(auth, provider);
        setIsAuth(true)
        localStorage.setItem("isAuthed", true)
    }

    function handleSignOut () {
        signOut(auth)
        setIsAuth(false)
        localStorage.setItem("isAuthed", false)
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
                    {/* <li><NavLink className='nav-link' to="cart">Cart</NavLink></li> */}
                </ul>
            </nav>

            <div className='flex justify-center items-center gap-2'>
                {
                    isAuth ? 
                    (<button onClick={handleSignOut} className='transition ease-in-out delay-150 flex item-center gap-2 bg-red-400 px-4 py-2 text-white font-bold rounded-md'><i className="bi bi-box-arrow-left"></i> SignOut</button>)
                    : 
                    (<button onClick={handleLogin} className='transition ease-in-out delay-150 flex item-center gap-2 bg-blue-400 px-4 py-2 text-white font-bold rounded-md'><i className="bi bi-google"></i>Login</button>)
                }
                
                <Link to='cart'><button className='p-2 rounded text-xl'><i className="bi bi-basket"></i></button></Link>
                <button onClick={() => setDisplayMenu(!displayMenu)} className={`p-2 rounded text-3xl max-sm:block hidden`}><i className="bi bi-list"></i></button>
            </div>
            

        </header>
    )
}

export default Header