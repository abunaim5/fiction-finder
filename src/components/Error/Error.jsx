import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-4 font-work font-bold text-3xl text-gray-300 h-screen">
            <h1>404</h1>
            <h2>Page Not found</h2>
            <Link to='/'><button className="btn text-white hover:text-[#131313] bg-[#23BE0A] hover:bg-transparent border-2 border-transparent hover:border-[#23BE0A] rounded-full w-auto h-auto min-h-max px-3 md:px-6 py-2 md:py-3">Go Back Home</button></Link>
        </div>
    );
};

export default Error;