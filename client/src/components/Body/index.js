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
            notClickedArray: [0, 1, 2, 3, 4, 5, 6, 7],
            clickedArray: [],
            shuffledArray: [0, 1, 2, 3, 4, 5, 6, 7]

        }
    }

    shuffle = () => {
        let array = this.state.shuffledArray;
        for (var i = 0; i < array.length; i++) {
            var randomNumber = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[randomNumber];
            array[randomNumber] = temp;
        }
        this.setState({
            shuffledArray: array
        })
    }

    beetleClick = (event, id) => {
        event.preventDefault();
        // console.log(this.shuffle(this.state.notClickedArray));

        let newScore = this.state.currentScore + 1;
        if (newScore < 9) {
            this.setState({
                currentScore: newScore
            });
        }
        this.shuffle();
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
                {this.state.shuffledArray.map(index => (
                    <Card
                        className="beetle"
                        id={this.state.beetles[index].id}
                        key={this.state.beetles[index].id}
                        url={this.state.beetles[index].url}
                        clickFunction={e => this.beetleClick(e)}
                    />
                ))}
            </div>
        )
    }
}

export default Body;
