import React from "react";
import "../../styles/Expand/Expand.scss";

const Expand = () => {
    return (
        <div className="Expand">
            <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="Expand__header text-center">
                    <span className="Expand__redWord">EXPAND</span> Your business
                </div>
                <input
                    type="button"
                    value="Join Us"
                    className="Expand__btn mt-4"
                />
            </div>
        </div>
    )
};

export default Expand;