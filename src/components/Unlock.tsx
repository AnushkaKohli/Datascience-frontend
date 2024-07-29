const Unlock = () => {
    return (
        <div className="px-6 lg:px-32 py-24 font-poppins flex flex-col gap-y-16">
            {/* Heading */}
            <h1 className="font-semibold text-3xl lg:text-5xl text-[#686972]">
                Unlock
                <span className="text-magenta"> 6 Certificates </span>
                &
                <span className="text-magenta"> Internship Opportunities</span>
            </h1>

            {/* Cards */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-y-5 lg:gap-x-10">
                {/* Card 1 */}
                <div className="flex-1 rounded-2xl lg:rounded-3xl border border-[#F9EBFC] bg-[#FCF5FE] flex flex-col items-center gap-y-5 lg:gap-y-8 p-5 lg:p-7">
                    <h1 className="font-semibold text-xl lg:text-2xl text-[#450D45]">Get 6 Industry Recognized Certificates!</h1>

                    <img className="shadow-[0px_0px_250px_-100px_#FFA50B40]" src="certiciate-design.svg" alt="internship-certificate" />

                    <div className="flex flex-wrap gap-2 lg:gap-x-3.5">
                        <div className="flex gap-x-1.5 bg-[#F9EBFC] border border-[#F4D6F8] rounded-full py-3 px-4">
                            <img src="award_star_magenta.svg" className="hidden lg:block" />
                            <p className="text-magenta text-sm lg:text-base">Official and Verified</p>
                        </div>
                        <div className="flex gap-x-1.5 bg-[#F9EBFC] border border-[#F4D6F8] rounded-full py-3 px-4">
                            <img src="award_star_magenta.svg" className="hidden lg:block" />
                            <p className="text-magenta text-sm lg:text-base">Enhances Credibility</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex-1 rounded-3xl border border-[#FFF4C5] bg-[#FFFCEA] flex flex-col items-center gap-y-8 p-7">
                    <div className="flex flex-col gap-y-1 text-left">
                        <h1 className="font-semibold text-xl lg:text-2xl text-[#481900]">Bag Internship Opportunities!</h1>
                        <p className="text-[#686972]">
                            With every course, we make you not only industry-ready but also help you crack your first internship.
                        </p>
                    </div>

                    <img src="internship_opportunities.svg" alt="internship-opportunities" />
                </div>
            </div>
        </div>
    )
}

export default Unlock
