import React from "react";
import { render } from "react-dom";
import Parent from "./Parent.jsx";

function GrandParent(props) {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a GrandParent Component</p>
            <Parent count={props.count}/>
            <Parent />
        </div>
    );
};
function areEqual(prevProps, nextProps) {
    // return true if passing nextProps to render would return the same result as passing prevProps to render, otherwise return false
};
export default React.memo(GrandParent);