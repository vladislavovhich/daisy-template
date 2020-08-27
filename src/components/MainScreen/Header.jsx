import React, {useState} from "react";
import logo from "../../images/logo.png";
import MSMenu from "./MSMenu";
import "../../styles/MainScreen/Header.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MSMenuAlt from "./MSMenuAlt";

const Header = () => {
    const [menuClassName, setMenuClassName] = useState("MenuHide");

    const showMenu = () => {
        setMenuClassName("MenuVisible")
    }
    const hideMenu = () => {
        setMenuClassName("MenuHidden")
    }

    return (
        <header className="Header">
            <div className="container h-100 d-flex flex-row justify-content-between align-items-center">
                <div className="Logo">
                    <img src={logo} alt=""/>
                </div>

                <MSMenu />
                <a href="#" className="ShowMenuBtn d-md-none d-block" onClick={showMenu}>
                    <FontAwesomeIcon icon="bars" fixedWidth={true}/>
                </a>
                <MSMenuAlt
                    hideMenu={hideMenu}
                    menuClassName={menuClassName}
                />
            </div>
        </header>
    )
};

export default Header;