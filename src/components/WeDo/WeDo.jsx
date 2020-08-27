import React from "react";
import WDHeader from "./WDHeader";
import "../../styles/WeDo/WeDo.scss"
import img from "../../images/large-devices.png";

const WeDo = () => {
    return (
        <div className="WeDo py-5">
            <div className="container d-flex flex-column align-items-center">
                <WDHeader />
                <div className="mt-5">
                    <div className="row d-flex flex-row align-items-center">
                        <div className="col-xl-6 col-lg-12 d-flex flex-column align-items-xl-start align-items-center">
                            <div className="WeDo__header d-flex flex-row align-items-center">
                                <div className="WeDo__redBlock"/>
                                <div className="WeDo__headerText ml-2">
                                    landing pages
                                </div>
                            </div>
                            <div className="WeDo__text mt-2 col-xl-10 col-md-8 col-12 m-0 p-0 text-xl-left text-center">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa
                            </div>
                            <input
                                type="button"
                                value="More details"
                                className="WeDo__btn mt-3 align-self-xl-start align-self-center"
                            />
                        </div>
                        <div className="col-xl-6 col-lg-12 mt-xl-0 mt-3 d-flex justify-content-xl-start justify-content-center">
                            <img src={img} alt="" className="WeDo__img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WeDo;