import React from "react";

export default React.memo(function GrandChild() {
    console.log("[ ]   [ ]   [ ]   [👶🏻] rendered")
    return (
            <div>
                <p>I'm a GrandChild Component</p>
            </div>
    );
});