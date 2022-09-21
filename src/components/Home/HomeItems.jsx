
import Button from '../Button'
function HomeItems({ item }) {


    return (
        <section className='flex flex-col items-center lg:justify-between lg:flex-row gap-6 '>
            <div className='lg:border-l lg:px-8 border-secondary lg:w-1/3'>
                <h2 className='mb-4 text-3xl font-bold font-garamond'>
                    {item.heading}
                </h2>
                <p className='mb-4'>
                    {item.text}
                </p>

                <Button style={'text-light uppercase'}>
                    Explore
                </Button>
            </div>

            <div className='lg:w-2/4'>
                <img className='w-full' src={item.image} alt='image' />
            </div>

        </section>
    )
}

export default HomeItems