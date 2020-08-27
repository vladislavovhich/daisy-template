import React from "react";
import "../../styles/WeDo/WDHeader.scss";

const WDHeader = () => {
    return (
        <div className="WDHeader d-flex flex-column align-items-center">
            <div className="WDHeader__header">
                WHAT DO <span className="WDHeader__redWord">WE DO?</span>
                <div className="WDHeader__underline" />
            </div>
        </div>
    )
};

export default WDHeader;