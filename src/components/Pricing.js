


export default function Pricing() {

    return (
        <div className="lg:p-40 md:p-20 sm:p-8 lg:py-10 md:py-5 sm:py-2 flex flex-wrap  space-y-20">
            <div className="flex flex-col items-center w-full space-y-5">
                <div className="text-6xl w-1/2 font-extrabold text-center text-black-rich">
                    Try Pulse free for 30 days.
                </div>
                <div className="w-1/2 text-center text-black-rich">
                    See why Pulse is the best way to monitor your cash flow. Sign up for any plan and try Pulse absolutely free for 30 days.
                </div>
            </div>

            <div className="flex w-full items-center justify-start">
                <div className="w-1/3 p-10 space-y-5">
                    {/* Details */}
                    <div className="font-extrabold text-green-go">These are what we call the Pulse Basics. They’re what every customer gets.</div>
                    <ul className="list-disc pl-5 leading-relaxed tracking-tight text-sm">
                        <li>Manage cash flow on a daily, weekly, monthly, or yearly basis</li>
                        <li>Forecast growth with recurring income or expenses that scale automatically</li>
                        <li>Works with any currency</li>
                        <li>See Money In and Money Out, categorize transactions, and run helpful reports</li>
                        <li>Toggle entries and accounts on and off to game out different scenarios</li>
                    </ul>
                    <div>

                        <div>Just need the Pulse Basics?</div>
                        <div><a className="underline">Get them now</a> for $29 per month.</div>
                    </div>
                </div>
                <div className=" border-2    border-green-go flex flex-col text-center space-y-5 items-center sm:w-full md:w-1/2 lg:w-1/3 bg-lotion border-1 rounded-t-lg">
                    {/* Recommended Plan */}
                    <div className="bg-green-go rounded-t-lg font-bold uppercase text-sm py-2 tracking-widest text-lotion text-center w-full"> Recommended </div>
                    <div className="text-5xl sm:p-3 md:p-5 lg:p-10 lg:pb-0 font-bold text-green-go">
                        Small Business Plan
                    </div>
                    <div className="text-2xl text-gray-500">
                        $59 per month
                    </div>
                    <a className="hover:scale-110 w-fit py-3  font-extrabold text-xl px-10 bg-green-ufo">Sign-up Now</a>
                    <div className="flex flex-col p-5 text-sm tracking-tight space-y-5 text-gray-600 text-left">
                        <div className="tracking-wide font-bold text-sm uppercase text-center">You get pulse basic, plus:</div>
                        <div className='flex items-start'>
                            <img className="w-3 inline mx-1 pt-1" src="./tick.svg"></img>
                            <div>
                                Manage cash flow on a daily, weekly, monthly, or yearly basis
                            </div>
                        </div><div className='flex items-start'>
                            <img className="w-3 inline mx-1 pt-1" src="./tick.svg"></img>
                            <div>
                                Forecast growth with recurring income or expenses that scale automatically
                            </div>
                        </div><div className='flex items-start'>
                            <img className="w-3 inline mx-1 pt-1" src="./tick.svg"></img>
                            <div>
                                Works with any currency
                            </div>
                        </div><div className='flex items-start'>
                            <img className="w-3 inline mx-1 pt-1" src="./tick.svg"></img>
                            <div>
                                See Money In and Money Out, categorize transactions, and run helpful reports
                            </div>
                        </div><div className='flex items-start'>
                            <img className="w-3 inline mx-1 pt-1" src="./tick.svg"></img>
                            <div>
                                Toggle entries and accounts on and off to game out different scenarios
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-fit border-2 border-gray-300 flex flex-col text-center space-y-5 items-center sm:w-full md:w-1/2 lg:w-1/3 bg-lotion">
                    {/* Higher Plan */}
                    <div className="text-sm text-center bg-gray-100 border-b-2 border-gray-300 p-5">Complex business with multiple financial accounts, currencies, or auditing needs?</div>
                    <div className="text-4xl sm:p-3 md:p-5 lg:p-10 lg:pb-0 text-green-go">
                        Unlock Extra Features
                    </div>
                    <div className="text-2xl text-gray-500">
                        $89 per month
                    </div>
                    <a className="hover:scale-110 w-fit py-3 font-extrabold text-xl px-10 bg-green-ufo">Try Premium</a>

                    <div className="flex flex-col p-5 tracking-tight space-y-5 text-gray-600 text-left text-sm">
                        <div className="tracking-wide font-bold text-sm uppercase text-center">You get it all basic, plus:</div>
                        <div className='flex items-start'>
                            <img className="w-3 inline mx-1 pt-1" src="./tick.svg"></img>
                            <div>
                                Manage cash flow across unlimited financial accounts
                            </div>
                        </div><div className='flex items-start'>
                            <img className="w-3 inline mx-1 pt-1" src="./tick.svg"></img>
                            <div>
                                Convert to any currency for localized cash flow reporting and projections
                            </div>
                        </div><div className='flex items-start'>
                            <img className="w-3 inline mx-1 pt-1" src="./tick.svg"></img>
                            <div>
                                Attach invoices or contracts to your cash flow entries for accountability and auditing
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="sm:w-full md:w-2/3 flex flex-col items-center text-center space-y-5">
                    <div>
                        <img src="https://pulseapp.com/img/subvert-avatar.png" className="w-100"></img>
                    </div>
                    <div className="text-2xl ">
                        “Pulse is worth every penny because it empowers business owners with critical financial insight and knowledge.”
                    </div>
                    <div className="font-bold uppercase text-green-go text-sm">Subvert Marketing, Inc.</div>
                </div>
            </div>
        </div >
    )

}