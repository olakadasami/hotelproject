import { Link } from "react-router-dom"

export function NavItem({ item }) {
    return (
        <li className="hover:text-primary duration-200 border-b border-0 hover:vo">
            <Link to={item.href}>
                {item.title}
            </Link>
        </li>
    )
}

function Nav() {

    const items = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Facilities",
            href: "/facilites"
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
        <nav className="flex text-light items-center justify-between h-24 px-28">
            <div className="bg-accent rounded-[2rem] rounded-t-none text-secondary w-52 h-full">
                <p className="font-bold uppercase pt-5 text-center font-garamond">
                    <span className="block tracking-[0.3rem] text-2xl">Luxury</span>
                    <span className="text-[10px] tracking-[0.5rem] text">hotels</span>
                </p>
            </div>

            <ul className="flex gap-12 items-center">
                {items.map((item, index) => (
                    <NavItem key={index} item={item} />
                ))}
            </ul>
        </nav>
    )
}

export default Nav