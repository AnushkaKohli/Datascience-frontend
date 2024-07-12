const Hero = () => {
  return (
    <div className="flex flex-col gap-y-8 my-10 lg:mt-16 lg:mb-14 font-poppins">
      {/* Upper half */}
      <div className="w-full flex flex-col px-6 py-7 lg:px-32 xl:w-2/3">
        {/* Box */}
        <div className="px-5 py-4 border border-[#FFA50B] rounded-2xl w-fit flex gap-x-2 tracking-wide self-center md:self-start">
          <img src="Graduation hat.svg" />
          <p>
            An <span className="font-semibold">IIT Delhi</span> Alumni Initiative
          </p>
        </div>
        {/* Heading and Description */}
        <div className="my-6 text-start">
          <h1 className="font-extrabold text-4xl md:text-6xl text-[#434347] lg:tracking-tighter lg:leading-[86px] mb-2">Become an Expert in the field of <span className="text-magenta"> Data Science with 6 courses </span></h1>
          <h4 className="md:text-xl">A specially crafted Tech Kickstarter, with <span className="font-semibold"> 5+ extensive online courses.</span></h4>
        </div>
        {/* CTC */}
        <div className="flex flex-wrap gap-2 lg:gap-x-3.5">
          <div className="flex gap-x-1.5 bg-[#FFFCEA] border border-[#FFF4C5] rounded-full py-3 px-4">
            <img src="award_star.svg" className="hidden lg:block" />
            <p className="text-[#BB5302]">Personal Mentorship</p>
          </div>
          <div className="flex gap-x-1.5 bg-[#FFFCEA] border border-[#FFF4C5] rounded-full py-3 px-4">
            <img src="award_star.svg" className="hidden lg:block" />
            <p className="text-[#BB5302]">Internship Assistance</p>
          </div>
          <div className="flex gap-x-1.5 bg-[#FFFCEA] border border-[#FFF4C5] rounded-full py-3 px-4">
            <img src="award_star.svg" className="hidden lg:block" />
            <p className="text-[#BB5302]">Industry Certified Courses</p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row w-full gap-x-3 pt-8 pb-16 self-center lg:self-start">
          <button className="flex items-center justify-center gap-x-1 rounded-2xl px-10 py-5 bg-gradient-to-b from-[#B73BBE] to-magenta hover:bg-[#99319e] shadow-3xl">
            <p className="text-[#FCF5FE]">Enroll Now</p>
            <img src="fi-br-paper-plane.svg" />
          </button>
          <button className="flex items-center justify-center gap-x-3 px-6 py-5">
            <p className="text-magenta font-semibold">Know More</p>
            <img src="fi-br-interrogation.svg" />
          </button>
        </div>
      </div>
      {/* Lower half */}
      <div className="hidden lg:flex bg-[#F9EBFC] justify-between items-center py-9 px-32">
        {/* Courses */}
        <div className="flex gap-x-3">
          <img src='Courses.svg' />
          <div className='flex flex-col gap-y-0.5'>
            <p className='font-semibold text-magenta text-4xl'>24</p>
            <p className='text-[#686972]'>Courses</p>
          </div>
        </div>
        {/* Line */}
        <div className="w-[1px] h-[80px] bg-[#F4D6F8]"></div>
        {/* <Learners /> */}
        <div className="flex gap-x-3">
          <img src='Learners.svg' />
          <div className='flex flex-col gap-y-0.5'>
            <p className='font-semibold text-magenta text-4xl'>30k+</p>
            <p className='text-[#686972]'>Learners</p>
          </div>
        </div>
        {/* Line */}
        <div className="w-[1px] h-[80px] bg-[#F4D6F8]"></div>
        {/* Doubts Solved */}
        <div className="flex gap-x-3">
          <img src='DoubtsSolved.svg' />
          <div className='flex flex-col gap-y-0.5'>
            <p className='font-semibold text-magenta text-4xl'>100k+</p>
            <p className='text-[#686972]'>Doubts Solved</p>
          </div>
        </div>
        {/* Line */}
        <div className="w-[1px] h-[80px] bg-[#F4D6F8]"></div>
        {/* Student Projects */}
        <div className="flex gap-x-3">
          <img src='StudentProjects.svg' />
          <div className='flex flex-col gap-y-0.5'>
            <p className='font-semibold text-magenta text-4xl'>10k+</p>
            <p className='text-[#686972]'>Student Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
