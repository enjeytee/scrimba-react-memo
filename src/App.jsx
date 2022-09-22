import React from "react";
import GrandParent from "./GrandParent.jsx";

// class App extends React.Component {
//     state = { count: 0 };
//     increment = () => this.setState(prevState => ({ count: prevState.count + 1 }))
//     render() {
//         console.log("[GP] [P] [C] [GC] APP just rendered");
//         return (
//             <div>
//                 <button onClick={this.increment}>+1</button>
//                 <h2>{this.state.count}</h2>
//                 <GrandParent count={this.state.count}/>
//                 <GrandParent />
//             </div>
//         );
//     };
// };
// export default App;

export default function App() {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(prevCount => prevCount + 1);
    console.log("[GP] [P] [C] [GC] APP just rendered");
    return (
        <div>
            <button onClick={increment}>+1</button>
            <h2>{count}</h2>
            <p>I'm the App Component</p>
            <GrandParent count={count}/>
            <GrandParent />
        </div>
    );
};