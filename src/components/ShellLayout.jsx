import './ShellLayout.css';
import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const ShellLayout = () => {

    return (
        <div className="shell-layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );

};