import React from "react";
import WRHeader from "./WRHeader";
import WRItems from "./WRItems";

const WeReceive = () => {
    return (
        <div className="WeReceive py-5">
            <div className="container d-flex flex-column align-items-center">
                <WRHeader />
                <WRItems />
            </div>
        </div>
    )
};

export default WeReceive;