import { Link } from "react-router-dom";
import bannerImg from '/images/bannerImg.png'

const Banner = () => {
    return (
        <div className="grid grid-cols-6 items-center justify-center mt-12 gap-16 md:gap-20 bg-[#1313130D] px-3 md:px-12 lg:px-24 xl:px-[120px] py-8 lg:py-16 xl:py-20 rounded-3xl">
            <div className="col-span-6 md:col-span-4 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold md:font-bold mb-12">Unlock Worlds: Discover Your Next Fictional Journey</h1>
                <Link to='/category'><button className="btn text-white hover:text-[#131313] bg-[#23BE0A] hover:bg-transparent border-2 border-transparent hover:border-[#23BE0A] rounded-lg text-xl font-work font-bold w-auto h-auto px-3 md:px-5 lg:px-7 py-2 md:py-3 lg:py-5">View The List</button></Link>
            </div>
            <div className="col-span-6 md:col-span-2 flex justify-center relative">
                <img className="" src={bannerImg} alt="" />
                <Link to='/premium'><button className="btn w-auto h-auto min-h-max bg-[#23BE0A99] border-none hover:bg-[#23BE0A66] rounded-full px-2 xl:px-5 py-1 text-white text-xs xl:text-base font-normal xl:font-medium absolute right-[105px] md:right-10 lg:right-12 xl:right-20 top-8 md:top-5 xl:top-8">Premium</button></Link>
            </div>
        </div>
    );
};

export default Banner;