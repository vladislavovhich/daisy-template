import React from "react";
import "../../styles/Portfolio/PItems.scss";

import p1 from "../../images/portfolio-1.png";
import p2 from "../../images/portfolio-2.png";
import p3 from "../../images/portfolio-3.png";
import p4 from "../../images/portfolio-4.png";
import p5 from "../../images/portfolio-5.png";
import p6 from "../../images/portfolio-6.png";

const PItems = () => {
    return (
        <div className="PItems mt-4">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="d-flex flex-column justify-content-end">
                        <img src={p1} alt="" className="PItems__imgBig"/>
                        <div className="d-flex flex-row justify-content-end mt-2">
                            <img src={p2} alt="" className="PItems__imgSmall"/>
                            <img src={p3} alt="" className="PItems__imgSmall pl-2"/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-12 mt-2 mt-lg-0">
                    <div className="d-flex flex-column justify-content-start">
                        <div className="d-flex flex-row justify-content-start">
                            <img src={p5} alt="" className="PItems__imgSmall"/>
                            <img src={p4} alt="" className="PItems__imgSmall pl-2"/>
                        </div>
                        <img src={p6} alt="" className="mt-2 PItems__imgBig"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PItems;