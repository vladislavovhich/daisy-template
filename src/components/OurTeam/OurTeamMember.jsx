import React from "react";
import "../../styles/OurTeam/OurTeamMember.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const OurTeamMember = (props) => {
    return (
        <div className="col-lg-4 col-md-12">
            <div className="OurTeamMember d-flex flex-column align-items-center py-2">
                <img src={props.img} alt=""/>
                <div className="mt-3 OurTeamMember__name">
                    <span className="OurTeamMember__redWord">{props.name}</span> {props.surname}
                </div>
                <div className="mt-1 OurTeamMember__profession">
                    {props.profession}
                </div>
                <div className="mt-2 OurTeamMember__socialWebs d-flex flex-row">
                    <a href="#" className="OurTeamMember__socialWeb">
                        <FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth={true}/>
                    </a>
                    <a href="#" className="OurTeamMember__socialWeb ml-2">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} fixedWidth={true}/>
                    </a>
                    <a href="#" className="OurTeamMember__socialWeb ml-2">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} fixedWidth={true}/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default OurTeamMember;