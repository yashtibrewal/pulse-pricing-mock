

export default function Navbar() {
    return (
        <nav className="lg:p-40 md:p-20 sm:p-8 lg:py-10 md:py-5 sm:py-2 flex justify-between ">
            <img className="w-30" src="https://pulseapp.com/img/pulse-logo.svg" alt="" aria-hidden="true" class="w-32 md:w-40" />
            <div className="text-green-go text-sm font-extrabold flex justify-around w-1/2 items-center">
                {/* Tabs */}
                <a className="hover:text-black-rich">Features</a>
                <a className="hover:text-black-rich">Customer Stories</a>
                <a className="text-black-rich">Pricing</a>
                <a className="hover:text-black-rich">Blog</a>
                <a className="hover:text-black-rich border-2 border-green-go px-3 py-1">Sign Up</a>
            </div>
        </nav>
    )
}