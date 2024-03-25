import image from '/images/bannerImg.png'

const CategoryListCard = () => {
    return (
        <div>
            <div className='grid grid-cols-6 gap-6 mt-12 mb-40'>
                <div className='flex items-center justify-center px-12 py-7 bg-[#F3F3F3] rounded-2xl col-span-2'>
                    <img className='' src={image} alt="" />
                </div>
                <div className='col-span-4'>
                    <div className='space-y-6'>
                        <div>
                            <h2 className='text-2xl font-bold text-[#131313] mb-4'>The Catcher in the Rye</h2>
                            <h4 className='font-work font-medium text-[#131313CC]'>By : Awlad Hossain</h4>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center my-4'>
                        <h4 className='font-work font-bold text-[#131313] mr-1'>Tag</h4>
                        <button className='px-4 py-2 rounded-full border-0 text-base bg-[#23BE0A0D] font-work font-medium text-[#23BE0A]'>#Young Adult</button>
                        <button className='px-4 py-2 rounded-full border-0 text-base bg-[#23BE0A0D] font-work font-medium text-[#23BE0A]'>#Identity</button>
                    </div>
                    <div className='font-work text-xl divide-y-2 font-medium text-[#131313CC]'>
                        <div className='mb-4 flex items-center gap-4'>
                            <h4 className='text-[#13131399]'><span>icon</span> <span>Publisher: Scribner</span></h4>
                            <h4 className='text-[#13131399]'><span>icon</span> <span>Page 192</span></h4>
                        </div>
                        <div></div>
                    </div>
                    <div className='flex gap-3 items-center mt-4'>
                        <button className='px-5 py-2 rounded-full border-0 text-base bg-[#23BE0A0D] font-work font-normal text-[#23BE0A]'>Category: Classic</button>
                        <button className='px-5 py-2 rounded-full border-0 text-base bg-[#23BE0A0D] font-work font-normal text-[#23BE0A]'>Rating: 4.5</button>
                        <button className='btn w-auto h-auto min-h-max px-5 py-2 rounded-full border-0 text-base bg-[#23BE0A0D] font-work font-medium text-[#23BE0A]'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryListCard;