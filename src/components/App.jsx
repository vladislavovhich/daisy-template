import React from "react";
import "../styles/App.scss";
import MainScreen from "./MainScreen/MainScreen";
import WeReceive from "./WeReceive/WeReceive";
import Expand from "./Expand/Expand";
import WeDo from "./WeDo/WeDo";
import Advertising from "./WeDo/Advertising";
import InternalContent from "./WeDo/InternalContent";
import Portfolio from "./Portfolio/Portfolio";
import OurTeam from "./OurTeam/OurTeam";
import "../styles/media.scss";

const App = () => {
    return (
        <div className="App d-flex flex-column">
            <MainScreen />
            <WeReceive />
            <Expand />
            <WeDo />
            <Advertising />
            <InternalContent />
            <Portfolio />
            <OurTeam />
        </div>
    )
}

export default App;