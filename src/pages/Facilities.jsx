import image1 from '../assets/luxuryHotels/gym.png'
import image2 from '../assets/luxuryHotels/pool-bar.png'
import image3 from '../assets/luxuryHotels/spa.jpg'
import image4 from '../assets/luxuryHotels/pool.jpg'
// import image5 from '../assets/luxuryHotels/res.jpg'
import image6 from '../assets/luxuryHotels/laundry.jpg'

import FacilityItem from '../components/Facilities/FacilityItem'
import Testimonials from '../components/Testimonials'

import Header from '../components/Header'

import bgImage from '../assets/luxuryHotels/header/facilities.png'

function Facilities() {

    const items = [
        {
            text: "The gym",
            image: image1
        },
        {
            text: "Poolside bar",
            image: image2
        },
        {
            text: "spa",
            image: image3
        },
        {
            text: "swimming pool",
            image: image4
        },
        {
            text: "laundry",
            image: image6
        },

    ]
    return (
        <main >
            <Header bgImage={bgImage} />

            <div className="contain">
                <section className='text-center mb-16'>
                    <h2 className='font-bold font-garamond text-4xl mb-6 uppercase'>
                        Facilities
                    </h2>
                    <p>
                        We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so
                        that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
                        and our modern luxury resort facilities will help you enjoy the best of all.
                    </p>
                </section>


                <section className='flex mb-16 flex-col gap-12 md:gap-28'>
                    {items.map((item, index) => {
                        return <FacilityItem key={index} item={item} />
                    })}
                </section>

                <Testimonials />
            </div>
        </main>
    )
}

export default Facilities