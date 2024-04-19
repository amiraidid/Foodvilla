import {Routes, Route} from 'react-router-dom'
import { About, CartPage, Contact, HomePage, PageNotFound, Service } from '../pages'

function AllRoutes() {
    return (
        <section>

            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='about' element={<About />}/>
                <Route path='service' element={<Service />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='cart' element={<CartPage />}/>
                <Route path='*' element={<PageNotFound />}/>
            </Routes>

        </section>
    )
}

export default AllRoutes