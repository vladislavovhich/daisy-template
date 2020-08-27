import React from "react";
import "../../styles/Portfolio/Portfolio.scss"
import PHeader from "./PHeader";
import PMenu from "./PMenu";
import PItems from "./PItems";

const Portfolio = () => {
    return (
        <div className="Portfolio py-5">
            <div className="container d-flex flex-column align-items-center">
                <PHeader />
                <PMenu />
                <PItems />
                <input
                    type="button"
                    value="I want landing page"
                    className="Portfolio__btn mt-4"
                />
            </div>
        </div>
    )
};

export default Portfolio;