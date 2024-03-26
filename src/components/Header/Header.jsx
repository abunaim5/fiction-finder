import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <NavLink to='/' className='btn btn-ghost'><li>Home</li></NavLink>
        <NavLink to='/category' className='btn btn-ghost'><li>Listed Books</li></NavLink>
        <NavLink to='/page-read' className='btn btn-ghost'><li>Pages to Read</li></NavLink>
        <NavLink className='btn btn-ghost'><li>Premium</li></NavLink>
        <NavLink className='btn btn-ghost'><li>Cart</li></NavLink>
    </>

    return (
        <div className="navbar bg-base-100 px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-work text-[#131313CC]">
                        {links}
                    </ul>
                </div>
                <Link><button className="text-3xl font-bold font-work gap-0 rounded-lg"><span className="text-[#23BE0A]">Fiction</span>Finder</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-work text-[#131313CC]">
                    {links}
                </ul>
            </div>
            <div className="navbar-end text-lg font-work font-semibold space-x-4">
                <button className="btn text-white hover:text-[#131313] bg-[#23BE0A] hover:bg-transparent border-2 border-transparent hover:border-[#23BE0A] rounded-lg w-auto h-auto min-h-max px-7 py-[18px]">Sign In</button>
                <button className="btn text-white hover:text-[#131313] bg-[#59C6D2] hover:bg-transparent border-2 border-transparent hover:border-[#59C6D2] rounded-lg w-auto h-auto min-h-max px-7 py-[18px]">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;