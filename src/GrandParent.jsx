import React from "react";
import Parent from "./Parent.jsx";

class GrandParent extends React.PureComponent {
    render() {
        console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
        return (
            <div>
                <p>I'm a GrandParent Component</p>
                <Parent />
                <Parent />
            </div>
        );
    };
};
export default GrandParent;