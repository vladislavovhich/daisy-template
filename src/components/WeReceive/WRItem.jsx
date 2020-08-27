import React from "react";
import "../../styles/WeReceive/WRItem.scss"

const WRItem = (props) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="WRItem d-flex flex-column align-items-center py-2">
                <img src={props.img} alt=""/>
                <div className="WRItem__title my-3">
                    <div>
                        {props.title}
                    </div>
                    <div className="WRItem__underline" />
                </div>
                <div className="WRItem__text col-md-12 col-sm-9 col-xs-6">
                    {props.text}
                </div>
            </div>
        </div>
    )
};

export default WRItem;