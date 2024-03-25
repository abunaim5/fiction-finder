import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Root = () => {
    return (
        <div className="max-w-[1440px] mx-auto pt-12">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;