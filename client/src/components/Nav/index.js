import React from "react";
import "./style.css";

function Nav() {
    return (
        <div className="jumbotron p-0 mt-2">
            <h1 className="title text-center">Beetle Memory Game</h1>
            <p className="text-center">To begin this game click on a beetle. The objective of the game is to click each beetle without clicking the same beetle twice. Beetles will shuffle once you click on one. It will keep your score for longest streak and reset if you click the same beetle twice.</p>
            <h2 className="text-center">Have fun!</h2>
        </div>
    );
}

export default Nav;
