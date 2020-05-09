import * as React from "react";
import "./App.css";
import SpaceEx from "./dashboard/space/space";
// import LayoutEx from "./dashboard/layout/layout";
// import GridEx from "./dashboard/grid/grid";

// import ButtonEx from "./dashboard/button/button";

export class App extends React.Component {
    readonly state = {
        isShow: true,
    }
    render() {
        return (
            <div >
                {/* <ButtonEx/> */}
                {/* <GridEx/> */}
                {/* <LayoutEx/> */}
                <SpaceEx />
            </div>
        );
    }
}
