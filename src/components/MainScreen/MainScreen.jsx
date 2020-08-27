import React from "react";
import Header from "./Header";
import "../../styles/MainScreen/MainScreen.scss"
import MSMidBar from "./MSMidBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MainScreen = () => {
    return (
        <div className="MainScreen d-flex flex-column justify-content-between py-3">
            <Header />
            <MSMidBar />
            <div/>
        </div>
    )
};

export default MainScreen;