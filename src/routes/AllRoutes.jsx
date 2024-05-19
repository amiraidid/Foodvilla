import {Routes, Route} from 'react-router-dom'
import { CartPage,HomePage, PageNotFound,ProductDetail } from '../pages'
import ProctectedRoutes from './ProctectedRoutes'



function AllRoutes() {
    return (
        <section>

            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='cart' element={ <ProctectedRoutes><CartPage /></ProctectedRoutes>}/>
                <Route path='product/:id' element={<ProductDetail />}/>
                <Route path='*' element={<PageNotFound />}/>
            </Routes>

        </section>
    )
}

export default AllRoutes