import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import Button from '../Button'

function RoomItem({ item }) {
    const { image, title, price } = item
    return (
        <div className='shadow-md rounded-md '>
            <div>
                <img className='w-full' src={image} alt="img" />
            </div>
            <p className='md:text-4xl text-lg uppercase font-bold text-center bg-secondary text-light py-6'>
                {title}
            </p>

            <div className='flex items-center flex-col md:flex-row gap-4 md:gap-0 justify-center md:justify-between py-10 px-4 md:px-16'>
                <div className='flex items-center gap-4'>
                    <div className='text-accent'>
                        <FaPlusCircle size={28} />
                    </div>
                    <p className='uppercase font-semibold md:text-lg'>
                        View room details
                    </p>
                </div>
                <Button style={'text-light'}>
                    ${price}  Avg/Night
                </Button>
            </div>
        </div>
    )
}

export default RoomItem