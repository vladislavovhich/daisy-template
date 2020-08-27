import React from "react";
import "../../styles/MainScreen/MSMenu.scss"

const MSMenu = () => {
    return (
        <div className="MSMenu h-100 d-md-block d-none">
            <nav className="h-100 w-100">
                <ul className="d-flex flex-row align-items-center h-100 w-100">
                    <li>
                        <a href="#">about</a>
                    </li>
                    <li>
                        <a href="#">portfolio</a>
                    </li>
                    <li>
                        <a href="#">services</a>
                    </li>
                    <li>
                        <a href="#">contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default MSMenu;