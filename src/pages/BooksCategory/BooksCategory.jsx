import { useContext, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Link, Outlet } from "react-router-dom";
import { CategoryContext } from "../../Layout/Root";

const BooksCategory = () => {
    const [active, setActive] = useState(0);

    const {data} = useContext(CategoryContext);
    const {handleFilterCategory} = data;
    // console.log(handleFilterCategory);

    return (
        <div className="mt-8">
            <div className="text-center bg-[#F3F3F3] rounded-2xl py-9">
                <h2 className="text-3xl text-[#131313] font-bold font-work">Books</h2>
            </div>
            <div className="text-center mt-8">
                <details className="dropdown">
                    <summary className="m-1 btn text-white bg-[#23BE0A] hover:bg-[#23BE0A] border-transparent rounded-lg text-lg font-work font-semibold w-auto h-auto px-3 md:px-5 py-2 md:py-[14px]">Sort By <span className="text-xl"><SlArrowDown /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 font-work space-y-2">
                        <button onClick={()=>handleFilterCategory('all')} className="bg-[#F3F3F3] rounded-full py-1 px-3 text-base"><li>Default</li></button>
                        <button onClick={()=>handleFilterCategory('rating')} className="bg-[#F3F3F3] rounded-full py-1 px-3 text-base"><li>Rating</li></button>
                        <button onClick={()=>handleFilterCategory('pages')} className="bg-[#F3F3F3] rounded-full py-1 px-3 text-base"><li>Number of pages</li></button>
                        <button onClick={()=>handleFilterCategory('year')} className="bg-[#F3F3F3] rounded-full py-1 px-3 text-base"><li>Published year</li></button>                       
                    </ul>
                </details>
            </div>
            <div role="tablist" className="tabs tabs-lifted tabs-lg mt-14 text-lg font-work text-[#131313CC]">
                <Link to='read' role="tab" onClick={() => {setActive(0)}} className={`tab ${active === 0 ? 'tab-active' : ''}`}>Read Books</Link>
                <Link to='wishlist' role="tab" onClick={() => {setActive(1)}} className={`tab ${active === 1 ? 'tab-active' : ''}`}>Wishlist Books</Link>
                <button role="tab" className="tab"></button>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default BooksCategory;