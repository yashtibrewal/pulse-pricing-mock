import { useState } from "react"


export default function Navbar({ handleNavbarClicked }) {

    const [navbarActive, setNavbarActive] = useState(false);

    const navbarClicked = () => {
        setNavbarActive(!navbarActive);
        handleNavbarClicked()
    }

    return (
        <nav className={"lg:p-40 md:p-20 p-8 lg:py-10 md:py-5  " + (navbarActive ? 'h-screen' : '')}>

            <div className="w-full flex justify-between items-center">
                <img alt="image" className="w-30" src="https://pulseapp.com/img/pulse-logo.svg" aria-hidden="true" class="w-32 md:w-40" />
                <div className="hidden lg:flex lg:items-center text-green-go text-sm font-extrabold w-1/2">
                    <ul className="w-full flex justify-around items-center">
                        <li><a className="hover:text-black-rich">Features</a></li>
                        <li><a className="hover:text-black-rich">Customer Stories</a></li>
                        <li><a className="text-black-rich">Pricing</a></li>
                        <li><a className="hover:text-black-rich">Blog</a></li>
                        <li><a className="hover:text-black-rich hover:bg-lotion hover:scale-110 border-2 border-green-go px-3 py-1">Sign Up</a></li>
                    </ul>
                </div>
                <div onClick={navbarClicked}
                    className="block lg:hidden border-2 border-green-ufo py-3 px-2 rounded-lg">
                    <div className="flex flex-col w-8 space-y-2">
                        <div className="border-b-2 border-green-ufo w-full"></div>
                        <div className="border-b-2 border-green-ufo w-full"></div>
                        <div className="border-b-2 border-green-ufo w-full"></div>
                    </div>
                </div>
            </div>
            {
                navbarActive && <div
                    className="text-green-go text-lg font-extrabold w-full mt-10 border-t-2 border-green-go
                    transition-opacity duration-300">
                    <ul className="w-full flex flex-col justify-center items-center space-y-5 mt-10">
                        <li><a className="hover:text-black-rich">Features</a></li>
                        <li><a className="hover:text-black-rich">Customer Stories</a></li>
                        <li><a className="text-black-rich">Pricing</a></li>
                        <li><a className="hover:text-black-rich">Blog</a></li>
                        <li><a
                            className="hover:text-black-rich hover:bg-lotion hover:scale-110 border-2 border-green-go px-3 py-1">
                            Sign Up</a></li>
                    </ul>
                </div>
            }

        </nav>
    )
}