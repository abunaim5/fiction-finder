import CategoryListCard from "../../components/CategoryListCard/CategoryListCard";

const BooksCategory = () => {
    return (
        <div className="mt-8">
            <div className="text-center bg-[#F3F3F3] rounded-2xl py-9">
                <h2 className="text-3xl text-[#131313] font-bold font-work">Books</h2>
            </div>
            <div className="text-center mt-8">
                <button className="btn text-white bg-[#23BE0A] hover:bg-[#23BE0A] border-transparent rounded-lg text-lg font-work font-semibold w-auto h-auto px-5 py-[14px]">Sort By</button>
            </div>
            <div role="tablist" className="tabs tabs-lifted tabs-lg mt-14 text-lg font-work text-[#131313CC]">
                <button role="tab" className="tab tab-active">Read Books</button>
                <button role="tab" className="tab">Wishlist Books</button>
                <button role="tab" className="tab"></button>
            </div>
            <CategoryListCard></CategoryListCard>

            {/* <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap text-gray-100 font-work text-lg">
                <button className="px-5 py-4 space-x-2 border-b border-gray-400 text-[#131313CC]">
                    <span>Read Books</span>
                </button>
                <button className="px-5 py-4 space-x-2 border border-b-0 rounded-t-lg border-gray-400 text-[#131313CC]">
                    <span>Wishlist Books</span>
                </button>
            </div> */}
        </div>
    );
};

export default BooksCategory;