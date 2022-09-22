import React from "react";
import Child from "./Child.jsx";

function Parent(props) {
    console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered");
    return (
        <div>
            <p>I'm a Parent Component</p>
            <Child count={props.count}/>
            <Child />
        </div>
    );
};
export default React.memo(Parent);