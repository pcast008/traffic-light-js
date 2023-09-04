import { Component } from "react";

const lightColors = ["red", "yellow", "green"];
export class ClassTrafficLight extends Component {
    state = {
        lightColorIndex: 0 
    }

    nextState = () => {
        this.setState({ lightColorIndex: this.state.lightColorIndex + 1 })
    }   

    render() {
        let lightColor = lightColors[this.state.lightColorIndex];

        if (this.state.lightColorIndex > lightColors.length - 1) {
            this.setState({ lightColorIndex: 0 })
        }

        return (
        <div className="traffic-light-box">
            <h2>Class Traffic Light</h2>
            <div className="traffic-light">
            {/* Background color can be black | yellow | red | green */}
            <div className={"circle " + ("red"    === lightColor ? "red"    : "black")}></div>
            <div className={"circle " + ("yellow" === lightColor ? "yellow" : "black")}></div>
            <div className={"circle " + ("green"  === lightColor ? "green"  : "black")}></div>
            </div>
            <button onClick={this.nextState} className="next-state-button">Next State</button>
        </div>
        );
  }
}
