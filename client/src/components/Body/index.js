import React, { Component } from 'react';
import Card from "../Card";
import beetles from "../../beetles.json";
import "./style.css";

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beetles: beetles,
            currentScore: 0,
            highScore: 0
        }
    }

    render() {
        return (
            <div className="body">
                <div className="score">
                    <h1 className="float-left scoreTitle">Current Score: {this.state.currentScore}</h1>
                    <h1 className="float-left scoreTitle">High Score: {this.state.highScore}</h1>
                </div>
                {this.state.beetles.map(beetle => (
                    <Card
                        id={beetle.id}
                        key={beetle.id}
                        url={beetle.url}
                    />
                ))}
            </div>
        )
    }
}

export default Body;
