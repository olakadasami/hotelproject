import { FaBars, FaTimes } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useState } from "react"

export function NavItem({ item, toogleNav }) {
    return (
        <li onClick={toogleNav}>
            <NavLink to={item.href}
                className={({ isActive }) => (`${isActive ? "text-accent border-b border-accent" : ""} hover:text-accent duration-200`)}
            >
                {item.title}
            </NavLink>
        </li>
    )
}

function Nav() {

    const [nav, setNav] = useState(false)

    const toogleNav = () => {
        setNav(!nav)
    }

    const items = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Facilities",
            href: "/facilities"
        },
        {
            title: "Rooms",
            href: "/rooms"
        },
        {
            title: "Contact-us",
            href: "/contact"
        },
    ]

    return (
        <nav className="flex absolute z-50 w-full top-0 text-light items-center justify-between h-24 px-6 md:px-20 lg:px-28">
            <div className="bg-accent rounded-[2rem] rounded-t-none text-secondary w-44 h-full">
                <p className="font-bold uppercase pt-5 text-center font-garamond">
                    <span className="block tracking-[0.3rem] text-2xl">Luxury</span>
                    <span className="text-[10px] tracking-[0.3rem] text">hotels</span>
                </p>
            </div>

            <ul className="md:flex gap-6 lg:gap-12 hidden items-center">
                {items.map((item, index) => (
                    <NavItem key={index} item={item} />
                ))}
            </ul>

            <div onClick={toogleNav} className="cursor-pointer md:hidden">
                <FaBars size={24} />
            </div>

            <div className={`${nav ? "right-0" : "-right-full"} w-full duration-200 md:hidden fixed h-[90vh] top-0 bg-secondary text-light uppercase font-semibold`}>

                <div className="relative pt-20 flex">

                    <div onClick={toogleNav} className="absolute z-40 cursor-pointer right-6 top-8">
                        <FaTimes size={24} />
                    </div>

                    <ul className="flex relative w-full flex-col justify-center items-center gap-10">
                        {items.map((item, index) => (
                            <NavItem key={index} toogleNav={toogleNav} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav