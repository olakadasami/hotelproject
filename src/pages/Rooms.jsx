import image1 from '../assets/luxuryHotels/single-room.jpg'
import image2 from '../assets/luxuryHotels/double-room.jpg'
import image3 from '../assets/luxuryHotels/twin-room.jpg'
import Testimonials from '../components/Testimonials'
import RoomItem from '../components/Rooms/RoomItem'
import Header from '../components/Header'

import bgImage from '../assets/luxuryHotels/header/rooms.png'

function Rooms() {

    const items = [
        {
            image: image1,
            title: "Single room",
            price: "147"
        },
        {
            image: image2,
            title: "Double room",
            price: "155"
        },
        {
            image: image3,
            title: "twin room",
            price: "155"
        },
    ]

    return (
        <main>

            <Header bgImage={bgImage} />

            <div className='contain'>
                <section className='text-center mb-16 px-8'>
                    <h2 className='font-bold font-garamond text-4xl mb-6 uppercase'>
                        ROOMS AND RATES
                    </h2>
                    <p>
                        Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes,
                        comfort isn't our only objective, we also value good design, sleek contemporary furnishing complemented
                        by the rich tones of nature's palette as visible from our rooms' sea-view windows and terraces.
                    </p>
                </section>

                <section className='flex flex-col gap-20 px-8'>
                    {items.map((item, index) => {
                        return <RoomItem key={index} item={item} />
                    })}
                </section>

                <Testimonials />
            </div>


        </main>
    )
}

export default Rooms