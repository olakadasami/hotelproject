import HomeItems from '../components/Home/HomeItems'
import Testimonials from '../components/Testimonials'
import Header from '../components/Header'

import image1 from '../assets/luxuryHotels/home1.png'
import image2 from '../assets/luxuryHotels/home2.png'

import bgImage from '../assets/luxuryHotels/header/home.png'

function Home() {

    const items = [
        {
            heading: "Luxury redefined",
            text: "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
            image: image2
        },
        {
            heading: "Leave your worries in the sand",
            text: "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean.",
            image: image1
        },

    ]

    return (
        <main>
            <Header bgImage={bgImage} />
            <div className="container">
                <p className='text-center text-lg mb-16'>
                    All our room types are including complementary breakfast
                </p>

                <div className='flex flex-col mb-10 gap-12'>
                    {items.map((item, index) => (
                        <HomeItems key={index} item={item} />
                    ))}
                </div>

                <Testimonials />
            </div>
        </main>
    )
}

export default Home