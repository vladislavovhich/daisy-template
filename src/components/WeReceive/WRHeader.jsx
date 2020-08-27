import React from "react";
import "../../styles/WeReceive/WRHeader.scss"

const WRHeader = () => {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-8 col-12">
                <div className="WRHeader d-flex flex-column align-items-center">
                    <div className="WRHeader__header d-flex flex-column">
                        <div className="text-center">
                            WHAT CAN <span className="WRHeader__redWord">YOU RECEIVE</span>
                        </div>
                        <div>
                            <div className="WRHeader__underline w-100 mt-1" />
                        </div>
                    </div>
                    <div className="WRHeader__text mt-2 text-center">
                        Elementum senectus venenatis urna euismod turpis sem.
                        Ante imperdiet sodales elit lorem libero pellentesque.
                        Curae; odio potenti integer elom lepell imelesque semante
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WRHeader;