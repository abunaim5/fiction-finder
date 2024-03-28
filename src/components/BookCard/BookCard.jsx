import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';
// import image from '/images/bannerImg.png'

const BookCard = ({ book }) => {
    const { bookId, image, bookName, author, tags, rating, category } = book;

    return (
        <Link to={`/details/${bookId}`}>
            <div className='p-6 rounded-2xl border border-[#13131326]'>
                <div className='flex items-center justify-center px-24 py-8 bg-[#F3F3F3] rounded-2xl'>
                    <img className='h-44' src={image} alt="" />
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
            </div>
        </Link>
    );
};

BookCard.propTypes = {
    book: PropTypes.object.isRequired
}

export default BookCard;