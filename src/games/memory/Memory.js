import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js";
import 'bootstrap/dist/css/bootstrap.css';
import Tile from "./Tile.js";
import ResetButton from "./ResetButton.js";

export default class Memory extends GameComponent {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    points: 0,
                    isTurn: true,
                    isWinner: false,
                    id: "",
                },
                {
                    points: 0,
                    isTurn: false,
                    isWinner: false,
                    id: "",
                }
            ],
            cellState: [],
        };
    }

    componentDidMount() {
        //put cellstate in here
        //then randomize
        var arr = [
            {
                color: "#16ff12",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#fbff0a",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#487fff",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#fbff0a",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#487fff",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ff3842",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ff7d13",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ff7dd8",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ae22ff",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#16ff12",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ff7dd8",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#b6ffe8",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ff7d13",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#b6ffe8",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ae22ff",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ff3842",
                isClicked: false,
                isMatched: false,
            },
        ];
        var k = 0;
        for(var i = arr.length - 1; i > 0; i--)
        {
            k = Math.floor(Math.random() * (i + 1));
            var value = arr[i];
            arr[i] = arr[k];
            arr[k] = value;

        }
        this.getSessionDatabaseRef().update({
            cellState: arr,
        });
    }

    onSessionDataChanged(data) {
        // use setstate here
        console.log("Data changed?", data);
        this.setState({ cellState: data.cellState });
    }

    handleReset = () => {
        var arr = [
            {
                color: "#16ff12",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#fbff0a",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#487fff",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#fbff0a",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#487fff",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ff3842",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ff7d13",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ff7dd8",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ae22ff",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#16ff12",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ff7dd8",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#b6ffe8",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ff7d13",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#b6ffe8",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ae22ff",
                isClicked: false,
                isMatched: false,
            },
            {
                color: "#ff3842",
                isClicked: false,
                isMatched: false,
            },
        ];
        var k = 0;
        for(var i = arr.length - 1; i > 0; i--)
        {
            k = Math.floor(Math.random() * (i + 1));
            var value = arr[i];
            arr[i] = arr[k];
            arr[k] = value;

        }
        this.getSessionDatabaseRef().update({
            cellState: arr,
        });
    }

    handleButtonClick = (cellNum) => {
        console.log("clicked" + cellNum);
        var currCellState = [...this.state.cellState];
        var chosenCell = currCellState[cellNum];
        chosenCell.isClicked = !chosenCell.isClicked;
        var clickedCells = currCellState.filter((cell) => cell.isClicked && !cell.isMatched);
        var matches = clickedCells.filter((cell) => cell.color == chosenCell.color);
        var ClickedCellsDontMatch = clickedCells.length > 1 && matches.length < clickedCells.length;
        if(ClickedCellsDontMatch)
        {
            console.log("clown");
            clickedCells.forEach((cell) => cell.isClicked = false);
        }
        else if(clickedCells.length == 1)
        {
            clickedCells.forEach((cell) => cell.isClicked = true);
        }
        else
        {
            clickedCells.forEach((cell) => {
                cell.isClicked = false;
                cell.isMatched = true;
            });
        }
        this.getSessionDatabaseRef().update({
            cellState: currCellState,
        });

        /*
        chosenCell.push();
        var firstIndex = chosenCell[0].index;
        if (chosenCell.length == 1) {
            currCellState[cellNum].isClicked = true;
        }
        if (chosenCell.length == 2) {
            if (chosenCell[0].color == chosenCell[1].color && !chosenCell[0].isMatched && !chosenCell[1].isMatched) {
                currCellState[firstIndex].isMatched = true;
                currCellState[cellNum].isMatched = true;
            }
        }

        */
        //this.setState();
        //set state of specified

    }

    render() {
        var id = this.getSessionId();
        var creator = UserApi.getName(this.getSessionCreatorUserId());
        var isCreator = this.getMyUserId() === this.getSessionCreatorUserId();
        var userStatus = isCreator ? "host" : "guest";
        var last_user = "No one";
        if (this.state.last_user_id !== null) {
            last_user = UserApi.getName(this.state.last_user_id);
        }
        var last_user_message = last_user + " clicked the button";
        const ImageGridList = (props) => {
            const { classes } = props;

            return (
                <div>
                    <div>
                        <p>You are the {userStatus}</p>
                        <p>Session ID: {id}</p>
                        <p>Session creator: {creator}</p>
                    </div>
                    <div style={{"display" : "flex", "flexFlow" : "row wrap", "width" : "130px"}}>
                    {this.state.cellState.map((cell, i) => <Tile
                    handler={this.handleButtonClick}
                    color={cell.color}
                    clicked={cell.isClicked}
                    matched={cell.isMatched}
                    index={i}
                     />)}
                     </div>
                    <ResetButton handle={this.handleReset} />
                </div>
            );

        }
        return (
            <ImageGridList />
        );
    }
}