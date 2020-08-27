import React from "react";
import "../../styles/MainScreen/MSMidBar.scss"

const MSMidBar = () => {
    return (
        <div className="container">
            <div className="MSMidBar d-flex flex-column align-items-center">
                <div className="MSMidBar__header d-flex flex-row justify-content-center align-items-center">
                    <div className="MSMidBar__text mx-2">
                        <span className="MSMidBar__redWord">clients</span> in your business
                    </div>
                </div>
                <input
                    type="button"
                    value="I want clients"
                    className="MSMidBar__btn mt-3"
                />
            </div>
        </div>
    )
};

export default MSMidBar;