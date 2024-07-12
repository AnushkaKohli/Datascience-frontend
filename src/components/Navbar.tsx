const Navbar = () => {
    return (
        <div className="font-poppins">
            {/* Upper nav */}
            <div className="flex justify-between items-center pt-14 pb-4 px-6 md:px-32 md:py-6">
                <span className="font-semibold">LOGO</span>
                <div className="flex gap-x-3 items-center">
                    <span className="text-magenta">Login</span>
                    <button className="text-white bg-gradient-to-b from-[#B73BBE] to-magenta hover:bg-[#99319e] font-medium rounded-xl px-6 py-3 shadow-3xl">Signup</button>
                </div>
            </div>
            {/* Lower nav */}
            <div className="bg-[#3B3B3E] text-white flex items-center justify-center gap-x-5 w-full py-4 md:py-3">
                <span className="hover:cursor-pointer">Overview</span>
                <span className="hover:cursor-pointer">Curriculum</span>
                <span className="hover:cursor-pointer">Refund</span>
                <span className="hover:cursor-pointer">Testimonials</span>
            </div>
        </div>
    )
}

export default Navbar
