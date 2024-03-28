import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types'
import { handleSetBooksIdInLocal } from "../../utils/localBooks/localBooks";
import { useContext } from "react";



const PremiumBookCard = ({ premiumBook }) => {
    const { bookId, image, bookName, author, tags, rating, category } = premiumBook;
    
    return (
        <div className='p-6 rounded-2xl border border-[#13131326]'>
            <div className='flex items-center justify-center px-24 py-8 bg-[#F3F3F3] rounded-2xl relative'>
                <img className='h-44' src={image} alt="" />
                <button className="btn w-auto h-auto min-h-max bg-[#23BE0A99] border-none hover:bg-[#23BE0A66] rounded-full px-2 xl:px-5 py-1 text-white text-xs xl:text-base font-normal xl:font-medium absolute right-3 top-3">Premium</button>
            </div>
            <div className='flex gap-3 mt-6'>

                {
                    tags.map((tag, inx) => <button key={inx} className='btn w-auto h-auto min-h-max px-4 py-2 rounded-full border-0 text-base bg-[#23BE0A0D] font-work font-medium text-[#23BE0A]'>{tag}</button>)
                }
            </div>
            <div className='mt-4 divide-y-[1px] divide-dashed space-y-5'>
                <div>
                    <h2 className='text-2xl font-bold text-[#131313] mb-4'>{bookName}</h2>
                    <h4 className='font-work font-medium text-[#131313CC]'>By : <span>{author}</span></h4>
                </div>
                <div></div>
            </div>
            <div className='flex items-center justify-between font-work font-medium text-[#131313CC] mt-5'>
                <h4 className=''>{category}</h4>
                <h4 className='flex items-center gap-2'><span>{rating}</span><span className='text-2xl'><FaRegStar /></span></h4>
            </div>
            <div className="mt-8 text-lg font-work font-semibold space-x-2 md:space-x-4">
                <button className="btn text-white hover:text-[#131313] bg-[#23BE0A] hover:bg-transparent border-2 border-transparent hover:border-[#23BE0A] rounded-full w-auto h-auto min-h-max px-3 md:px-6 py-2 md:py-3">Buy Now</button>
                <button onClick={() => handleSetBooksIdInLocal('cart', bookId)} className="btn text-white hover:text-[#131313] bg-[#59C6D2] hover:bg-transparent border-2 border-transparent hover:border-[#59C6D2] rounded-full w-auto h-auto min-h-max px-3 md:px-6 py-2 md:py-3">Add To Cart</button>
            </div>
        </div>
    );
};

PremiumBookCard.propTypes = {
    premiumBook: PropTypes.object.isRequired
}

export default PremiumBookCard;