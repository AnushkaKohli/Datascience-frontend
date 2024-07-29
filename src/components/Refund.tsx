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
        <div className="px-6 md:px-32 pt-8 lg:pt-16 pb-20 lg:pb-28 flex flex-col gap-y-14 font-poppins items-center">
            {/* Heading */}
            <h1 className="font-bold text-2xl lg:text-5xl text-[#686972] lg:w-3/5 lg:pb-14">
                Don't miss out on this
                <span className="bg-gradient-to-r from-[#B73BBE] to-[#992E9D] bg-clip-text text-transparent"> limited-time opportunity </span>
                to learn for
                <span className="bg-gradient-to-r from-[#B73BBE] to-[#992E9D] bg-clip-text text-transparent"> Free!</span>
            </h1>
            {/* Seats Left Box */}
            <div className="lg:w-2/5 flex flex-col gap-y-3 items-center rounded-4xl bg-gradient-to-r from-[#9849FF] to-[#841EE3] shadow-4xl px-5 py-8">
                <div className='-mb-20'>
                    <h1 className="font-bold text-3xl text-white">
                        100% Refund Offer 😎
                    </h1>
                    <img src='scribble final version-24.svg' className='relative left-[24.50rem] -top-[4rem]' />
                </div>
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
                <h1 className='text-[#450D45] font-extrabold text-2xl lg:text-4xl leading-[54px] tracking-tight'>How does it work?</h1>
                {/* Steps */}
                {/* Mobile steps illustration*/}
                {/* <div className="w-12 flex flex-col items-start justify-center relative gap-[223px] lg:hidden">
                    <div className="self-stretch h-[60px] flex flex-row items-center justify-center relative gap-[10px] z-[1]">
                        <img
                            className="h-full w-full absolute !m-[0] top-[0px] left-[0px]"
                            alt=""
                            src="steps-mobile.svg"
                        />
                        <a className="[text-decoration:none] absolute !m-[0] top-[15px] left-[calc(50%_-_4px)] tracking-[-0.02em] font-bold text-[inherit] inline-block min-w-[8px] z-[1]">
                            1
                        </a>
                    </div>
                    <div className="self-stretch h-[60px] flex flex-row items-center justify-center relative gap-[10px] z-[1]">
                        <img
                            className="h-full w-full absolute !m-[0] top-[0px] left-[0px]"
                            alt=""
                            src="steps-mobile.svg"
                        />
                        <b className="absolute !m-[0] top-[15px] left-[calc(50%_-_6px)] tracking-[-0.02em] inline-block min-w-[12px] z-[1]">
                            2
                        </b>
                    </div>
                    <div className="self-stretch h-[60px] flex flex-row items-center justify-center relative gap-[10px] z-[1]">
                        <img
                            className="h-full w-full absolute !m-[0] top-[0px] left-[0px]"
                            alt=""
                            src="steps-mobile.svg"
                        />
                        <b className="w-[13px] absolute !m-[0] top-[15px] left-[calc(50%_-_6px)] tracking-[-0.02em] inline-block min-w-[13px] z-[1]">
                            3
                        </b>
                    </div>
                </div> */}
                {/* Steps Card */}
                <div className='lg:pb-28 flex flex-col lg:flex-row justify-between items-stretch gap-y-8 lg:gap-x-6'>
                    {/* Step 1 */}
                    <div className='flex-1 flex flex-col justify-center items-center gap-y-6'>
                        <div className='hidden lg:flex w-[92px] h-10 flex-row items-center justify-center relative gap-[10px] mq450:w-[calc(100%_-_40px)]'>
                            <img
                                className="z-[1] h-full w-full absolute max-w-full max-h-full"
                                loading="lazy"
                                alt="steps-arrow"
                                src="steps.svg"
                            />
                            <div className="z-[2] w-[84px] relative tracking-[-0.03em] font-medium text-[#FCF5FE] px-5">
                                Step 1
                            </div>
                            {/* <div className='z-[0] border border-black w-full absolute top-4 left-4'></div> */}
                        </div>
                        <div className='flex flex-col h-full w-full justify-between rounded-2xl border border-[#F9EBFC] p-5 gap-y-4 bg-gradient-to-b from-[#FFFFFF] to-[#FCF5FE]'>
                            <p className='text-base lg:text-xl font-semibold text-[#7F2781]'>Step 1 : Enroll into your favorite course for only ₹1,499</p>
                            <img src="step1.svg" alt='step 1' className='h-24' />
                            <p>Start Learning with <span className='font-semibold'>Lifetime Course Access.</span></p>
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div className='flex-1 flex flex-col justify-center items-center gap-y-6'>
                        <div className='hidden lg:flex w-[92px] h-10 flex-row items-center justify-center relative gap-[10px] mq450:w-[calc(100%_-_40px)]'>
                            <img
                                className="h-full w-full absolute max-w-full max-h-full"
                                loading="lazy"
                                alt="steps-arrow"
                                src="steps.svg"
                            />
                            <div className="w-[84px] relative tracking-[-0.03em] font-medium text-[#FCF5FE] px-5 z-[1]">
                                Step 2
                            </div>
                        </div>
                        <div className='flex flex-col h-full w-full justify-between rounded-2xl border border-[#F9EBFC] p-5 gap-y-4 bg-gradient-to-b from-[#FFFFFF] to-[#FCF5FE]'>
                            <p className='text-base lg:text-xl font-semibold text-[#7F2781]'>Step 2: Complete Course & Assignments within 2 Years!</p>
                            <div className='flex justify-start items-center gap-x-2 lg:gap-x-4 p-4 rounded-lg lg:rounded-2xl border border-[#E5E5E8]'>
                                <p className='bg-gradient-to-b from-[#FFA50B] to-[#E27900] bg-clip-text text-transparent font-bold text-4xl'>2</p>
                                <p className='text-[#4C4D52]'>years time from the date of enrollment</p>
                            </div>
                            <p>Finish the course within <span className='font-semibold'>2 Years </span>to Qualify for Refund.</p>
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div className='flex-1 flex flex-col justify-center items-center gap-y-6'>
                        <div className='hidden lg:flex w-[92px] h-10 flex-row items-center justify-center relative gap-[10px] mq450:w-[calc(100%_-_40px)]'>
                            <img
                                className="h-full w-full absolute max-w-full max-h-full"
                                loading="lazy"
                                alt="steps-arrow"
                                src="steps.svg"
                            />
                            <div className="w-[84px] relative tracking-[-0.03em] font-medium text-[#FCF5FE] px-5 z-[1]">
                                Step 3
                            </div>
                        </div>
                        <div className='flex flex-col h-full w-full justify-between rounded-2xl border border-[#F9EBFC] p-5 gap-y-4 bg-gradient-to-b from-[#FFFFFF] to-[#FCF5FE]'>
                            <p className='text-base lg:text-xl font-semibold text-[#7F2781]'>Step 3: Receive 100% Refund upon completion</p>
                            <div className='flex justify-start items-center gap-x-2 lg:gap-x-4 p-4 rounded-lg lg:rounded-2xl border border-[#E5E5E8]'>
                                <p className='bg-gradient-to-b from-[#FFA50B] to-[#E27900] bg-clip-text text-transparent font-bold text-4xl'>100%</p>
                                <p className='text-[#4C4D52]'>Enrollment Fee is refunded</p>
                            </div>
                            <p>Upon Course Completion within <span className='font-semibold'>2 Years, </span>Get Your <span className='font-semibold'>₹1,499 Back.</span></p>
                        </div>
                    </div>
                </div>


                {/* <section className="self-stretch flex flex-row items-start justify-start gap-[22px] text-center text-xl text-white font-poppins">

                    <div className="flex-1 flex flex-col items-start justify-start gap-[32px] text-left text-base text-eminence-800">
                        <div className="self-stretch rounded-lg [background:linear-gradient(180deg,_#fff,_#fcf5fe)] overflow-hidden flex flex-col items-start justify-start py-3.5 px-[15px] gap-[14.5px] border-[1px] border-solid border-eminence-100">
                            <a className="[text-decoration:none] self-stretch relative tracking-[-0.03em] font-semibold text-[inherit]">
                                Step 1 : Enroll into your favorite course for only ₹699
                            </a>
                            <div className="flex flex-row items-center justify-center py-px px-[54px]">
                                <img
                                    className="h-[69px] w-[102px] relative object-cover"
                                    loading="lazy"
                                    alt=""
                                    src="/image-533@2x.png"
                                />
                            </div>
                            <div className="self-stretch relative text-sm text-darkslategray">
                                <span className="font-medium">{`Start Learning with `}</span>
                                <span className="font-semibold text-gray">
                                    Lifetime Course Access.
                                </span>
                            </div>
                        </div>
                        <div className="self-stretch rounded-lg [background:linear-gradient(180deg,_#fff,_#fcf5fe)] overflow-hidden flex flex-col items-start justify-start py-3.5 px-[15px] gap-[14.5px] border-[1px] border-solid border-eminence-100">
                            <div className="self-stretch relative tracking-[-0.03em] font-semibold">{`Step 2: Complete Course & Assignments within 3 Months!`}</div>
                            <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-center py-1 px-[15px] gap-[4px] text-13xl text-woodsmoke-700 border-[1px] border-solid border-woodsmoke-100">
                                <b className="relative tracking-[-0.03em] inline-block text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffa50b,_#e27900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] min-w-[20px]">
                                    3
                                </b>
                                <div className="flex-1 relative text-xs tracking-[-0.03em]">
                                    months time from the date of enrollment
                                </div>
                            </div>
                            <div className="self-stretch relative text-sm text-darkslategray">
                                <span className="font-medium">{`Finish within `}</span>
                                <span className="font-semibold text-gray">3 Months</span>
                                <span className="font-medium"> to Qualify for Refund.</span>
                            </div>
                        </div>
                        <div className="self-stretch rounded-lg [background:linear-gradient(180deg,_#fff,_#fcf5fe)] overflow-hidden flex flex-col items-start justify-start py-3.5 px-[15px] gap-[16px] border-[1px] border-solid border-eminence-100">
                            <div className="self-stretch relative tracking-[-0.03em] font-semibold">
                                Step 3: Receive 100% Refund upon completion
                            </div>
                            <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-center py-[11px] px-[15px] gap-[8px] text-13xl text-woodsmoke-700 border-[1px] border-solid border-woodsmoke-100">
                                <b className="relative tracking-[-0.03em] inline-block text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffa50b,_#e27900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] min-w-[79px]">
                                    100%
                                </b>
                                <div className="flex-1 relative text-xs tracking-[-0.03em]">
                                    Enrollment Fee is refunded
                                </div>
                            </div>
                            <div className="self-stretch relative text-sm text-darkslategray">
                                <span className="font-medium">{`Upon Course Completion within 3 months, Get Your `}</span>
                                <span className="font-semibold text-gray">₹699 Back.</span>
                            </div>
                        </div>
                    </div>
                </section> */}

            </div>
        </div >
    )
}

export default Refund
