import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import React from "react";
import {Index} from '../components/Footer';

const MainLayout: React.FC = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content container ">
                <Outlet/>
            </div>
            <Index/>
        </div>
    );
};

export default MainLayout