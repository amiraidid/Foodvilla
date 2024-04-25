import { AboutUs, Hero, Categories, Services, Testimonial } from '../components'
import useTitle from '../hooks/useTitle'
import Contact from './Contact'

function HomePage() {
    
    useTitle("Home")

    return (
        <section>
            <Hero />
            <AboutUs />
            <Categories />
            <Services />
            <Testimonial />
            <Contact />
        </section>
    )
}

export default HomePage