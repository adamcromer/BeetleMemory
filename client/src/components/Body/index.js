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
            highScore: 0,
            clickedArray: []
        }
    }

    shuffle = beetles => {
        for (var i = (beetles.length - 1); i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = beetles[i];
            beetles[i] = beetles[j];
            beetles[j] = temp;
        }
        return beetles;
    }

    beetleClick = (event, id) => {
        event.preventDefault();

        let newScore = this.state.currentScore + 1;
        if (newScore < 9) {
            this.setState({
                currentScore: newScore
            });
        }
    }

    loadScore = () => {
        if (this.state.currentScore > 7) {
            return this.winDiv();
        } else {
            return this.scoreDiv();
        }
    }

    componentDidUpdate = () => {

        if (this.state.currentScore > this.state.highScore) {
            this.setState({
                highScore: this.state.currentScore
            })
        }
    }

    reset = (event) => {
        event.preventDefault();
        this.setState({
            currentScore: 0
        })
    }

    winDiv = () => {
        return (
            <div className="win winOrScore">
                <h1 className="float-left winTitle">You win!</h1>
                <button className="float-left scoreTitle button btn btn-lg"
                    onClick={e => this.reset(e)}>
                    Play again?
                </button>
            </div>
        )
    }

    scoreDiv = () => {
        return (
            <div className="score winOrScore">
                <h1 className="float-left scoreTitle">Current Score: {this.state.currentScore}</h1>
                <h1 className="float-left scoreTitle">High Score: {this.state.highScore}</h1>
            </div>
        )
    }

    render() {
        return (
            <div className="body">
                {this.loadScore()}
                {this.state.beetles.map(beetle => (
                    <Card
                        className="beetle"
                        id={beetle.id}
                        key={beetle.id}
                        url={beetle.url}
                        clickFunction={e => this.beetleClick(e)}
                    />
                ))}
            </div>
        )
    }
}

export default Body;
