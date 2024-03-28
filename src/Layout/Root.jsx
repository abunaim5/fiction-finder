import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from "react";

export const CategoryContext = createContext();


const Root = () => {
    const [data, setData] = useState({});
    // console.log(data);

    return (
        <div className="max-w-[1440px] px-2 lg:px-4 mx-auto pt-6 md:pt-12">
            <CategoryContext.Provider value={{data, setData}}>
                <Header></Header>
                <Outlet></Outlet>
                <ToastContainer />
            </CategoryContext.Provider>
        </div>
    );
};

export default Root;