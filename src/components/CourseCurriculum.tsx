const CourseCurriculum = () => {
    const courses = [
        { name: 'C++', description: 'Learn C++ for strong programming fundamentals.' },
        { name: 'MERN Stack', description: 'Master the MERN stack for high-demand projects.' },
        { name: 'Data Structure & Algorithm', description: 'Excel in Data Structures and Algorithms for interview success.' },
        { name: 'Competitive Programming', description: 'Excel in Data Structures and Algorithms for interview success.' }
    ];
    return (
        <div className="bg-[#FCF5FE] flex flex-col gap-y-10 lg:gap-y-14 justify-center items-center py-11 lg:py-28 px-6 lg:px-32 mb-10 lg:mb-24 font-poppins">
            {/* Heading */}
            <div className="flex flex-col gap-y-2 lg:gap-y-5 items-center">
                <div className="border border-[#F4D6F8] rounded-full py-4 px-7 mb-5 bg-[#F9EBFC] text-magenta w-fit text-sm lg:text-base">
                    DATASCIENCE COURSE LEARNING PATH
                </div>
                <p className="font-bold text-2xl lg:text-5xl">
                    <span className="bg-gradient-to-r from-[#B73BBE] to-[#EBCB2E] bg-clip-text text-transparent">Data Science </span>Course Curriculum
                </p>
            </div>
            {/* Courses */}
            <div className="bg-white shadow-md rounded-3xl lg:rounded-lg w-full">
                {
                    courses.map((course) => (
                        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-y-3 px-8 py-4 border-b border-gray-200">
                            <div className="text-start">
                                <h2 className="text-base lg:text-xl font-semibold">{course.name}</h2>
                                <p className="text-sm lg:text-base text-gray-500">{course.description}</p>
                            </div>
                            <button className="flex w-full items-center justify-center md:w-fit rounded-xl md:rounded-full border border-[#F9EBFC] bg-[#FCF5FE] py-3 lg:py-4 px-8 gap-x-2.5 text-magenta hover:text-[#bd3ac2] focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <img className="h-5 lg:h-full" src="fi-br-eye.svg" />
                                <span className="text-sm lg:text-base">View Curriculum</span>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CourseCurriculum

