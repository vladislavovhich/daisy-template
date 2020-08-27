import React from "react";
import "../../styles/Portfolio/PMenu.scss"

const PMenu = () => {
    return (
        <div className="PMenu w-100 mt-4 d-flex flex-column align-items-center">
            <div className="PMenu__underline"/>
            <nav className="w-100 px-3">
                <ul className="w-100 d-flex align-items-center justify-content-between">
                    <li>
                        <a href="#">all</a>
                    </li>
                    <li>
                        <a href="#">entertainment</a>
                    </li>
                    <li>
                        <a href="#">sport</a>
                    </li>
                    <li>
                        <a href="#">business</a>
                    </li>
                    <li>
                        <a href="#">building</a>
                    </li>
                </ul>
            </nav>
            <div className="PMenu__underline"/>
        </div>
    )
};

export default PMenu;