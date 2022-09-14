import { FaArrowCircleDown, FaHome } from "react-icons/fa"
import Button from "./Button"

function Header({ bgImage }) {

    const style = {
        backgroundImage: `url(${bgImage})`
    }

    return (
        <header style={style} className='bg-cover bg-fixed bg-no-repeat flex relative px-8 md:px-28 text-light h-[90vh]'>
            <div className="absolute bg-secondary top-0 left-0 h-full w-full opacity-60"></div>
            <div className="my-auto z-20">
                <h1 className=" uppercase mb-6">
                    <span className="text-3xl block">welcome to</span>
                    <span className="font-garamond font-semibold text-8xl tracking-[0.5rem] my-1 block">luxury</span>
                    <span className="font-garamond font-semibold text-4xl tracking-[0.5rem] block">hotels</span>
                </h1>
                <p className="md:w-3/4 tracking-[0.1rem]">
                    Book your stay and enjoy Luxury
                    redefined at the most affordable rates.
                </p>
            </div>

            <div className="left-1/2 -translate-x-1/2 flex flex-col items-center gap-10 absolute bottom-4">
                <Button style={'uppercase'}>
                    <FaHome size={24} />
                    <p>book now</p>
                </Button>

                <div className="flex gap-2 text-lg flex-col items-center">
                    Scroll
                    <FaArrowCircleDown size={24} />
                </div>
            </div>
        </header>
    )
}

export default Header