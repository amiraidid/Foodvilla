import {Routes, Route} from 'react-router-dom'
import { About, CartPage, Contact, HomePage, PageNotFound, Service,ProductDetail } from '../pages'
import ProctectedRoutes from './ProctectedRoutes'

function AllRoutes() {
    return (
        <section>

            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='about' element={<About />}/>
                <Route path='service' element={<Service />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='cart' element={ <ProctectedRoutes><CartPage /></ProctectedRoutes>}/>
                <Route path='product/:id' element={<ProductDetail />}/>
                <Route path='*' element={<PageNotFound />}/>
            </Routes>

        </section>
    )
}

export default AllRoutes