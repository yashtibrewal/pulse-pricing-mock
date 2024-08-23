

export default function Navbar() {
    return (
        <nav className="lg:p-40 md:p-20 sm:p-8 lg:py-10 md:py-5 sm:py-2 flex justify-between ">
            <img alt="image"  className="w-30" src="https://pulseapp.com/img/pulse-logo.svg" aria-hidden="true" class="w-32 md:w-40" />
            <div className="text-green-go text-sm font-extrabold flex justify-around w-1/2 items-center">
                {/* Tabs */}
                <a href="#"  className="hover:text-black-rich">Features</a>
                <a href="#"  className="hover:text-black-rich">Customer Stories</a>
                <a href="#"  className="text-black-rich">Pricing</a>
                <a href="#"  className="hover:text-black-rich">Blog</a>
                <a href="#"  className="hover:text-black-rich hover:bg-lotion hover:scale-110 border-2 border-green-go px-3 py-1">Sign Up</a>
            </div>
        </nav>
    )
}