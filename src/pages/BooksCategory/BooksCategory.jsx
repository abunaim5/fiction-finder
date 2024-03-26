import { useState } from "react";
import CategoryListCard from "../../components/CategoryListCard/CategoryListCard";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";

const BooksCategory = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="mt-8">
            <div className="text-center bg-[#F3F3F3] rounded-2xl py-9">
                <h2 className="text-3xl text-[#131313] font-bold font-work">Books</h2>
            </div>
            <div className="text-center mt-8">
                <details className="dropdown">
                    <summary className="m-1 btn text-white bg-[#23BE0A] hover:bg-[#23BE0A] border-transparent rounded-lg text-lg font-work font-semibold w-auto h-auto px-5 py-[14px]">Sort By <span className="text-xl"><SlArrowDown /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 font-work">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published year</a></li>
                    </ul>
                </details>
            </div>
            <div role="tablist" className="tabs tabs-lifted tabs-lg mt-14 text-lg font-work text-[#131313CC]">
                <Link to='read'><button role="tab" onClick={() => setActive(0)} className={`tab ${active === 0 ? 'tab-active' : ''}`}>Read Books</button></Link>
                <Link to='wishlist'><button role="tab" onClick={() => setActive(1)} className={`tab ${active === 1 ? 'tab-active' : ''}`}>Wishlist Books</button></Link>
                <button role="tab" className="tab"></button>
            </div>
            <CategoryListCard></CategoryListCard>
        </div>
    );
};

export default BooksCategory;