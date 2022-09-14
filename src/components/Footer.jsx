import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Button from './Button'

function Footer() {

    const links = [
        "About Us",
        "Contact",
        "Terms & Conditions"
    ]

    const socialLinks = [

        {
            text: "Facebook",
            icon: <FaFacebookF />
        },
        {
            text: "Twitter",
            icon: <FaTwitter />
        },
        {
            text: "Instagram",
            icon: <FaInstagram />
        },
    ]

    return (
        <footer id='footer' className='bg-secondary px-8 md:px-28 flex flex-wrap gap-10 justify-center md:justify-between items-center py-20 text-light '>
            <div className='w-68'>
                <div className='text-start mb-2'>
                    <p className="font-bold uppercase pt-5 text-center font-garamond">
                        <span className="block tracking-[0.3rem] text-xl">Luxury</span>
                        <span className="text-[8px] tracking-[0.5rem] text">hotels</span>
                    </p>
                </div>

                <div className='text-sm'>
                    <p>
                        497 Evergreen Rd. Roseville, CA 95673
                    </p>
                    <p>
                        +44 345 678 903
                    </p>
                    <p>
                        luxury_hotels@gmail.com
                    </p>
                </div>
            </div>

            <ul className='w-40'>
                {links.map((item, index) => (
                    <li key={index} className='cursor-pointer mb-3 hover:translate-x-1 duration-200 hover:text-primary'>
                        {item}
                    </li>
                ))}
            </ul>

            <ul className='w-52'>
                {socialLinks.map((item, index) => (
                    <li key={index} className="flex mb-3 hover:text-primary cursor-pointer hover:translate-x-1 duration-200 items-center justify-start gap-4">
                        <div>
                            {item.icon}
                        </div>
                        <div>
                            {item.text}
                        </div>
                    </li>
                ))}
            </ul>

            <form className='w-60'>
                <label className='block font-semibold mb-6' htmlFor="subscribe">
                    Subscribe to our newsletter
                </label>
                <div className='flex'>
                    <input className='py-2 focus:outline-none inline-block placeholder-light bg-secondary px-4 rounded rounded-r-none border-2 border-accent' type="text" id='subscribe' placeholder='Email Address' />
                    <Button style={'text-secondary rounded-l-none'}>
                        OK
                    </Button>
                </div>
            </form>


        </footer>
    )
}

export default Footer