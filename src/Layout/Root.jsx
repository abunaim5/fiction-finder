import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className="max-w-[1440px] mx-auto pt-12">
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Root;