import React from "react";
import GrandChild from "./GrandChild.jsx";

function Child(props) {
    console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
    return (
        <div>
            <p>I'm a Child component</p>
            <GrandChild count={props.count}/>
            <GrandChild />
        </div>
    );
};
export default React.memo(Child);