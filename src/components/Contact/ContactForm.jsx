import React from 'react'
import Button from '../Button'

function ContactForm() {
    return (
        <form className='max-w-[500px] mx-auto'>
            <div className='mb-5 '>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" className='block px-3 w-full rounded py-2 bg-light border border-secondary' id='name' />
            </div>

            <div className='mb-5'>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    className='block px-3 w-full rounded py-2 bg-light border border-secondary'
                    type="email" id='email' />
            </div>
            <div className='mb-5'>
                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    className='block px-3 w-full rounded py-2 bg-light h-52 border border-secondary'
                    type="textarea" id='message' />
            </div>

            <div className='flex justify-end'>
                <Button style={'text-light '}>
                    Submit
                </Button>
            </div>

        </form>
    )
}

export default ContactForm