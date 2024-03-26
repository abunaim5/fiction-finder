import { Link, useLoaderData, useParams } from 'react-router-dom';
// import image from '/images/bannerImg.png'

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const book = books.find(book => book.bookId === intId);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div className='grid grid-cols-6 gap-12 mt-12 mb-40'>
            <div className='flex items-center justify-center p-[75px] bg-[#F3F3F3] rounded-2xl col-span-3'>
                <img className='' src={image} alt="" />
            </div>
            <div className='col-span-3'>
                <div className='divide-y-[1px] space-y-6'>
                    <div>
                        <h2 className='text-[40px] font-bold text-[#131313] mb-4'>{bookName}</h2>
                        <h4 className='font-work text-xl font-medium text-[#131313CC]'>By : {author}</h4>
                    </div>
                    <div></div>
                </div>
                <div className='font-work text-xl divide-y-[1px] font-medium text-[#131313CC] mt-4'>
                    <h4 className='mb-4'>{category}</h4>
                    <div></div>
                </div>
                <p className='mt-6 font-work text-[#131313B3]'><span className='font-bold text-[#131313]'>Review: </span>{review}</p>
                <div className='my-6 divide-y-[1px] space-y-6'>
                    <div className='flex gap-3 items-center'>
                        <h4 className='font-work font-bold text-[#131313] mr-1'>Tag</h4>
                        {
                            tags.map((tag, inx) => <button key={inx} className='btn w-auto h-auto px-4 py-2 rounded-full border-0 text-base bg-[#23BE0A0D] font-work font-medium text-[#23BE0A]'>#{tag}</button>)
                        }
                    </div>
                    <div></div>
                </div>
                <div className='space-y-3 mt-6 w-3/5'>
                    <h4 className='flex gap-16 font-work text-[#131313B3]'><span>Number of Pages:</span><span className='font-semibold text-[#131313]'>{totalPages}</span></h4>
                    <h4 className='flex gap-16 font-work text-[#131313B3]'><span>Publisher:</span><span className='font-semibold text-[#131313]'>{publisher}</span></h4>
                    <h4 className='flex gap-16 font-work text-[#131313B3]'><span>Year of Publishing:</span><span className='font-semibold text-[#131313]'>{yearOfPublishing}</span></h4>
                    <h4 className='flex gap-16 font-work text-[#131313B3]'><span>Rating:</span><span className='font-semibold text-[#131313]'>{rating}</span></h4>
                </div>
                <div className='mt-8 space-x-4'>
                    <Link><button className="btn text-[#131313] bg-transparent border-2 border-[#50B1C9] hover:bg-transparent hover:border-[#50B1C9] rounded-lg text-lg font-work font-semibold w-auto h-auto px-7 py-[18px]">Read</button></Link>
                    <Link><button className="btn text-white hover:text-[#131313] bg-[#50B1C9] hover:bg-transparent border-2 border-transparent hover:border-[#50B1C9] rounded-lg text-lg font-work font-semibold w-auto h-auto px-7 py-[18px]">Wishlist</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;