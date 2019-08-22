import React, { Component } from 'react';
import './App.css';

class KittenCanvas extends Component {

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "lightcoral";
        ctx.fillRect(0, 0, 400, 400);
    }

    render() {
        return (
            <div className="canvas-area">
                <canvas ref="canvas" width={400} height={400} />
            </div>
        );
    }
}

class Eyes extends Component {

    colorChoiceClick(choice) {
        alert(choice);
    }

    render() {
        return (
            <div className="eye-control-area">
                <h1>Eyes</h1>
                <h3>Color</h3>
                    <div className="color-choice-area">
                        <div className="color-choice"
                            style={{
                                background: "orange"
                            }}
                            onClick={() => this.colorChoiceClick("orange")}
                        ></div>
                        <div className="color-choice"
                            style={{
                                background: "blue"
                            }}
                            onClick={() => this.colorChoiceClick("blue")}
                        ></div>
                        <div className="color-choice"
                            style={{
                                background: "green"
                            }}
                            onClick={() => this.colorChoiceClick("green")}
                        ></div>
                    </div>
                <h3>Shape</h3>
                <h3>Size</h3>
                <h3>Width</h3>
            </div>
        );
    }
}

class Controls extends Component {
    render() {
        return (
            <div className="control-area">
                <Eyes />
            </div>
        );
    }
}

function App() {
  return (
    <div className="App">
        <KittenCanvas />
        <Controls />
    </div>
  );
}

export default App;
