import React, {useState} from "react";
import "../../styles/MainScreen/MSMenuAlt.scss";

const MSMenuAlt = (props) => {
    return (
        <div className={`${props.menuClassName} d-md-none d-block MSMenuAlt animate__animated w-75 py-3 px-4`}>
            <nav className="w-100 h-100">
                <ul className="w-100 h-100 d-flex flex-column align-items-center">
                    <li>
                        <a href="#" onClick={props.hideMenu}>hide menu</a>
                    </li>
                    <li className="underline">
                    </li>
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

export default MSMenuAlt;