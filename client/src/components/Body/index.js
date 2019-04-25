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
            clickedArray: [],
            shuffledArray: [0, 1, 2, 3, 4, 5, 6, 7],
            isInArray: false,
            winOrLose: ""
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

    beetleClick = (id) => {
        // if (this.stateclickedArray =! []) {

        // }
        this.state.clickedArray.forEach(number => {
            if (id === number) {
                this.setState({
                    isInArray: true
                })
            }
        });

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
            this.win();
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

        if (this.state.isInArray === true) {
            this.lose();
        }
    }

    lose = () => {
        this.setState({
            winOrLose: "Sorry, you lose."
        });
        this.winOrLoseDiv();
        this.reset();
    }

    win = () => {
        this.setState({
            winOrLose: "You win!"
        });
        this.winOrLoseDiv();
        this.reset();
    }

    reset = () => {
        this.setState({
            currentScore: 0,
            isInArray: false
        });
        this.shuffle();
    }

    winOrLoseDiv = () => {
        return (
            <div className="win winOrScore">
                <h1 className="float-left winTitle">{this.state.winOrLose}</h1>
                <button className="float-left scoreTitle button btn btn-lg"
                    onClick={this.reset}>
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
                        clickFunction={this.beetleClick}
                    />
                ))}
            </div>
        )
    }
}

export default Body;
