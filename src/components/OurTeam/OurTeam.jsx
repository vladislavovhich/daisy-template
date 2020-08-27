import React from "react";
import "../../styles/OurTeam/OurTeam.scss";
import OTHeader from "./OTHeader";
import OurTeamMember from "./OurTeamMember";
import member1 from "../../images/team-1.png";
import member2 from "../../images/team-2.png";
import member3 from "../../images/team-3.png";

const OurTeam = () => {
    return (
        <div className="OurTeam py-5">
            <div className="container">
                <OTHeader />
                <div className="row mt-5">
                    <OurTeamMember
                        name="Tomothy"
                        surname="Bowman"
                        profession="Marketing"
                        img={member1}
                    />
                    <OurTeamMember
                        name="Steve"
                        surname="Tracy"
                        profession="CEO"
                        img={member2}
                    />
                    <OurTeamMember
                        name="Hellen"
                        surname="Johns"
                        profession="Clients"
                        img={member3}
                    />
                </div>
            </div>
        </div>
    )
};

export default OurTeam;