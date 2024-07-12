import '../App.css'
import { useState } from 'react'

const Refund = () => {
    const [sliderValue, setSliderValue] = useState(20);
    const maxSliderValue = 100;
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10)
        setSliderValue(value);
    }
    const progress = (sliderValue / maxSliderValue) * 100;
    return (
        <div className="md:px-32 md:py-16 flex flex-col gap-y-14 font-poppins items-center">
            {/* Heading */}
            <h1 className="font-bold text-5xl text-[#686972] w-3/5 pb-14">
                Don't miss out on this
                <span className="bg-gradient-to-r from-[#B73BBE] to-[#992E9D] bg-clip-text text-transparent"> limited-time opportunity </span>
                to learn for
                <span className="bg-gradient-to-r from-[#B73BBE] to-[#992E9D] bg-clip-text text-transparent"> Free!</span>
            </h1>
            {/* Seats Left Box */}
            <div className="w-2/5 flex flex-col gap-y-3 items-center rounded-4xl bg-gradient-to-r from-[#9849FF] to-[#841EE3] shadow-4xl px-5 py-8">
                <div className='-mb-20'>
                    <h1 className="font-bold text-3xl text-white">
                        100% Refund Offer 😎
                    </h1>
                    <img src='scribble final version-24.svg' className='relative left-[24.50rem] -top-[4rem]' />
                </div>
                {/* <h1 className="font-bold text-3xl text-white">
                    100% Refund Offer 😎
                    <img src='scribble final version-24.svg' className='relative left-[24.50rem] -top-[4rem]' />
                </h1> */}
                {/* Range */}
                <div className="flex flex-col gap-y-3.5 w-full text-start range">
                    <div className="value text-lg text-white text-opacity-70">{sliderValue} Seats Left</div>
                    <input type="range" min="0" max={maxSliderValue} value={sliderValue} onChange={handleSliderChange} id="range" style={{
                        background: `linear-gradient(to right, #FFC41B ${progress}%, rgba(255, 255, 255, 0.15) ${progress}%)`,
                    }} />
                </div>
                <div className="flex gap-1 pt-3.5">
                    <img src="bx_time-five.svg" />
                    <p className="text-white text-xl">Offer ends in 10:00Mins</p>
                </div>
            </div>
            {/* How does it work? */}
            <div className='flex flex-col gap-y-6 w-full'>
                {/* Heading */}
                <h1 className='text-[#450D45] font-extrabold text-4xl leading-[54px] tracking-tight'>How does it work?</h1>
                {/* Steps */}
                {/* <div className='flex md:flex-row justify-between items-start gap-6'>
                    <div className="flex-1 text-center md:text-left p-6 bg-purple-50 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                                <span className="font-bold">1</span>
                            </div>
                            <h3 className="text-lg font-bold text-purple-500">Step 1</h3>
                        </div>
                        <p className="font-semibold mb-2">Enroll into your favorite course for only ₹1,499</p>
                        <p>Start Learning with <strong>Lifetime Course Access</strong>.</p>
                        <img src='' alt="Enroll" className="mt-4 mx-auto" />
                    </div>
                </div> */}
                {/* <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200 mx-56">
                    <ol className="grid grid-cols-3 text-sm font-medium">
                        <li className="relative flex justify-start">
                            <img src="steps.svg" alt="Step 1" className="w-24 h-10 absolute -bottom-[2.3rem] -start-[10px] z-0" />
                            <span className="text-red-900 text-lg z-1 mt-8"> Step 1 </span>
                        </li>

                        <li className="relative flex justify-center text-blue-600">
                            <span
                                className="absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full bg-blue-600 text-white"
                            >
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>

                            <span className="hidden sm:block"> Address </span>

                            <svg
                                className="mx-auto size-6 sm:hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </li>

                        <li className="relative flex justify-end">
                            <span className="absolute -bottom-[1.75rem] end-0 rounded-full bg-gray-600 text-white">
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>

                            <span className="hidden sm:block"> Payment </span>

                            <svg
                                className="size-6 sm:hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                            </svg>
                        </li>
                    </ol>
                </div>
                <div className="flex justify-center items-center my-8">
                    <div className="relative flex items-center">
                        <div className="flex-1 border-t border-gray-200"></div>
                        <div className="flex-shrink-0 mx-2">

                        </div>
                        <div className="flex-1 border-t border-gray-200"></div>
                        <div className="flex-shrink-0 mx-2">
                            <img src="steps.svg" alt="Step 2" className="w-24 h-10" />
                        </div>
                        <div className="flex-1 border-t border-gray-200"></div>
                        <div className="flex-shrink-0 mx-2">
                            <img src="steps.svg" alt="Step 3" className="w-24 h-10" />
                        </div>
                        <div className="flex-1 border-t border-gray-200"></div>
                    </div>
                </div> */}
            </div>
        </div >
    )
}

export default Refund
