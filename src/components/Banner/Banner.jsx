import { Link } from "react-router-dom";
import bannerImg from '/images/bannerImg.png'

const Banner = () => {
    return (
        <div className="grid grid-cols-6 items-center mt-12 gap-20 bg-[#1313130D] px-[120px] py-20 rounded-3xl">
            <div className="col-span-4">
                <h1 className="text-[3.5rem] font-bold mb-12">Unlock Worlds: Discover Your Next Fictional Journey</h1>
                <Link to='/category'><button className="btn text-white hover:text-[#131313] bg-[#23BE0A] hover:bg-transparent border-2 border-transparent hover:border-[#23BE0A] rounded-lg text-xl font-work font-bold w-auto h-auto px-7 py-5">View The List</button></Link>
            </div>
            <div className="col-span-2">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;