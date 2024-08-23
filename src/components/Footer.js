


export default function Footer() {

    return (
        <div className=" bg-black-rich lg:p-16 lg:px-40 md:p-8 p-4">
            <div className="flex flex-wrap justify-center p-5">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-5">
                    <img alt="image" src="https://pulseapp.com/img/pulse-logo.svg" aria-hidden="true" class="w-32 md:w-40" />
                    <a className="hover:text-lotion hover:bg-gradient-to-l text-sm md:text-md lg:text-lg
                            w-fit py-4 px-8  lg:py-4 lg:px-16 bg-gradient-to-r font-bold from-green-go to-green-ufo">
                        Sign-up for a 30-Day Trial</a>
                </div>
                <div className="w-full md:w-1/2 text-sm md:text-md lg:text-lg ">
                    <div className="flex p-5 text-green-ufo space-x-5">
                        <div className="flex w-full md:1/2 lg:w-1/3 flex-col space-y-4">
                            <h1 className="font-bold text-md md:text-lg lg:text-xl text-lotion">Product</h1>
                            <a className="hover:text-lotion">Features</a>
                            <a className="hover:text-lotion">Pricing</a>
                            <a className="hover:text-lotion">Sign Up</a>
                        </div>
                        <div className="flex w-full md:1/2 lg:w-1/3  flex-col space-y-4 ">
                            <h1 className="font-bold text-md md:text-lg  text-lotion">Company</h1>
                            <a className="hover:text-lotion">Customer Stories</a>
                            <a className="hover:text-lotion">About</a>
                            <a className="hover:text-lotion">Contact</a>
                        </div>
                        <div className="flex w-full md:1/2 lg:w-1/3  flex-col space-y-4 ">
                            <h1 className="font-bold text-md md:text-lg  text-lotion">Resources</h1>
                            <a className="hover:text-lotion">Support</a>
                            <a className="hover:text-lotion">Blog</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center text-lotion font-extralight text-sm">
                <div className="p-2">
                    ©2019 Pulseapp.com, Inc. All Rights Reserved | <a class="font-normal text-gray-600 hover:text-gray-500">Terms of Use</a> | <a class="font-normal text-gray-600 hover:text-gray-500">Privacy Policy</a> | <a class="font-normal text-gray-600 hover:text-gray-500">EU Privacy</a>

                </div>
                <div className="p-2 pt-0 md:p-2">
                    Pulse is made by <a target="_blank" rel="noopener" class="font-normal text-gray-600 hover:text-gray-500">Simple Focus</a>. We also make <a target="_blank" rel="noopener" class="font-normal text-gray-600 hover:text-gray-500">Ballpark</a>, <a target="_blank" rel="noopener" class="font-normal text-gray-600 hover:text-gray-500">Sifter</a>, and
                    <a target="_blank" rel="noopener" class="font-normal text-gray-600 hover:text-gray-500">Curated</a>.
                </div>
            </div>
        </div>
    )

}