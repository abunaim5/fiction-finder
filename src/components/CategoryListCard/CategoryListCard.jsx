// import image from '/images/bannerImg.png'
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryListCard = ({ book }) => {
    const { bookId, image, bookName, author, tags, publisher, totalPages, category, rating } = book;

    // console.log(book);

    return (
        <div className='grid grid-cols-6 gap-6 border border-[#13131326] p-6 rounded-2xl'>
            <div className='flex items-center justify-center px-12 py-7 bg-[#F3F3F3] rounded-2xl col-span-1'>
                <img className='h-44' src={image} alt="" />
            </div>
            <div className='col-span-5'>
                <div className='space-y-6'>
                    <div>
                        <h2 className='text-2xl font-bold text-[#131313] mb-4'>{bookName}</h2>
                        <h4 className='font-work font-medium text-[#131313CC]'>By : {author}</h4>
                    </div>
                </div>
                <div className='flex gap-3 items-center my-4'>
                    <h4 className='font-work font-bold text-[#131313] mr-1'>Tag</h4>
                    {
                        tags.map((tag, idx)=><button key={idx} className='px-4 py-2 rounded-full border-0 text-base bg-[#23BE0A0D] font-work font-medium text-[#23BE0A]'>#{tag}</button>)
                    }
                </div>
                <div className='font-work text-xl divide-y-[1px] font-medium text-[#131313CC]'>
                    <div className='mb-4 flex items-center gap-4'>
                        <h4 className='text-[#13131399] flex items-center gap-2'><span className='text-2xl'><HiOutlineUsers /></span> <span>Publisher: {publisher}</span></h4>
                        <h4 className='text-[#13131399] flex items-center gap-2'><span className='text-2xl'><HiOutlineDocumentChartBar /></span> <span>Page {totalPages}</span></h4>
                    </div>
                    <div></div>
                </div>
                <div className='flex gap-3 items-center mt-4'>
                    <button className='px-5 py-2 rounded-full border-0 text-base bg-[#328EFF26] font-work font-normal text-[#328EFF]'>Category: {category}</button>
                    <button className='px-5 py-2 rounded-full border-0 text-base bg-[#FFAC3326] font-work font-normal text-[#FFAC33]'>Rating: {rating}</button>
                    <Link to={`/details/${bookId}`}><button className='btn w-auto h-auto min-h-max px-5 py-2 rounded-full border-0 text-base bg-[#23BE0A] hover:bg-[#23BE0A] font-work font-medium text-white'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

CategoryListCard.propTypes = {
    book: PropTypes.object.isRequired
}

export default CategoryListCard;