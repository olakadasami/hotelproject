import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import ContactForm from '../components/Contact/ContactForm'

function Contact() {
    return (
        <main className='py-40 px-8 md:px-28'>
            <section id="text" className='mb-20'>
                <h1 className='uppercase font-garamond mb-3 text-3xl font-bold'>
                    We are here for you
                </h1>
                <p>
                    At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,
                    please forward it to our support desk and we will get back to you as soon as possible.
                </p>
            </section>

            <div className='flex gap-20 flex-wrap justify-center lg:justify-between'>
                <aside id="address" className='flex flex-col gap-4 text-2xl w-full lg:w-1/3'>
                    <p>
                        497 Evergreen Rd. Roseville, CA 95673
                    </p>
                    <div className='flex gap-4 cursor-pointer hover:translate-x-1 w-fit duration-200 items-center font-semibold'>
                        <p>
                            View map
                        </p>
                        <FaArrowRight />
                    </div>
                    <p>
                        +44 345 678 903
                    </p>
                    <p>
                        luxury_hotels@gmail.com
                    </p>
                </aside>

                <main className='w-full lg:w-1/3'  >
                    <ContactForm />
                </main>
            </div>

        </main>
    )
}

export default Contact