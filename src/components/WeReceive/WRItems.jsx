import React from "react";
import WRItem from "./WRItem";

import computer from "../../images/computer.png";
import rocket from "../../images/rocket.png";
import marketing from "../../images/marketing.png";
import adv from "../../images/adv.png";

const text = "Elementum senectus venenatis urna euismod turpis sem." +
    "Ante imperdiet sodales elit lorem libero.";

const WRItems = (props) => {
    return (
        <div className="WRItems mt-5">
            <div className="row">
                <WRItem
                    title="clients"
                    img={rocket}
                    text={text}
                />
                <WRItem
                    title="branding"
                    img={computer}
                    text={text}
                />
                <WRItem
                    title="marketing"
                    img={marketing}
                    text={text}
                />
                <WRItem
                    title="adv."
                    img={adv}
                    text={text}
                />
            </div>
        </div>
    )
};

export default WRItems;