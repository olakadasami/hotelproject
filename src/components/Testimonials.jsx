import React from 'react'
import { FaRegCaretSquareLeft, FaRegCaretSquareRight } from 'react-icons/fa'

function Testimonials() {
    return (
        <div className='text-center py-12'>
            <h2 className='text-3xl font-bold mb-8'>
                Testimonials
            </h2>

            <p className='mb-3'>
                "Calm, Serene, Retro - What a way to relax and enjoy"
            </p>
            <p className='text-sm mb-2'>
                Mr. and Mrs. Baxter, UK
            </p>

            <div className='justify-center text-accent flex gap-4'>
                <FaRegCaretSquareLeft className='cursor-pointer' size={32} />
                <FaRegCaretSquareRight className='cursor-pointer' size={32} />
            </div>
        </div>
    )
}

export default Testimonials