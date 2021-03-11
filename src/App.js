import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
import ScrollBox from "./ScrollBox";
import { render } from "@testing-library/react";

// function getRandomColor() {
//     return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//     state = {
//         color: "#000000",
//     };

//     handleClick = () => {
//         this.setState({
//             color: getRandomColor(),
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>랜덤색상</button>
//                 <ErrorBoundary>
//                     <LifeCycleSample color={this.state.color} />
//                     <div>하이{console.log("hi")}</div>
//                 </ErrorBoundary>
//             </div>
//         );
//     }
// }

class App extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    맨 밑으로
                </button>
            </div>
        );
    }
}

export default App;
