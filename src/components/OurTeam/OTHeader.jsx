import React from "react";
import "../../styles/OurTeam/OTHeader.scss"

const OTHeader = () => {
    return (
        <div className="OTHeader d-flex flex-column align-items-center">
            <div className="OTHeader__header">
                OUR <span className="OTHeader__redWord">Team</span>
                <div className="OTHeader__underline" />
            </div>
        </div>
    )
};

export default OTHeader;