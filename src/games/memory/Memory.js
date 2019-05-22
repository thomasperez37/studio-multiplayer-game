import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js";
import Tile from "./Tile.js";

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
            cellState: [
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
            ],
        };
        // this.getSessionDatabaseRef().set({text:"Hello Fil!"});
    }

    onComponentDidMount() {
        //put cellstate in here
        //then randomize
    }

    onSessionDataChanged(data) {
        // use setstate here
        console.log("Data changed?", data);
        this.setState({ cellState: data.cellState });
    }

    handleButtonClick = (cellNum) => {
        console.log("clicked" + cellNum);
        var currCellState = [...this.state.cellState];
        var chosenCell = currCellState[cellNum];
        chosenCell.isClicked = true;
        var clickedCells = currCellState.filter((cell) => cell.isClicked && !cell.isMatched);
        if(clickedCells.length == 1 && clickedCells[0].color == chosenCell.color)
        {

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
        //var users = this.getSessionUserIds().map(user_id => (
            //<li key={user_id}>{UserApi.getName(user_id)}</li>
        //));
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

                        <p>Session users:</p>

                        {//<ul> {users} </ul>
                        }
                        <button onClick={() => this.handleButtonClick()}>Button</button>
                        <p>{last_user_message}</p>
                    </div>
                    {this.state.cellState.map((cell, i) => <Tile
                    handler={this.handleButtonClick}
                    color={cell.color}
                    clicked={cell.isClicked}
                    matched={cell.isMatched}
                    index={i}
                     />)}
                    <div class="row">
                        <div class="col-md-3" style={{ backgroundColor: this.state.cellState[0].isClicked ? this.state.cellState[0].color : "white" }}>
                            {// this.state.cellState[0].isClicked ? this.state.cellState[0].color : "white"
                            }
                        </div>
                        <div class="col-md-3" style={{ backgroundColor: this.state.cellState[1].isClicked ? this.state.cellState[1].color : "white" }}>
                        </div>
                        <div class="col-md-3" style={{ backgroundColor: this.state.cellState[2].isClicked ? this.state.cellState[2].color : "white" }}>
                        </div>
                        <div class="col-md-3" style={{ backgroundColor: this.state.cellState[3].isClicked ? this.state.cellState[3].color : "white" }}>
                        </div>
                        <div class="row">
                            <div class="col-md-3" style={{ backgroundColor: this.state.cellState[4].isClicked ? this.state.cellState[4].color : "white" }}>
                            </div>
                            <div class="col-md-3" style={{ backgroundColor: this.state.cellState[5].isClicked ? this.state.cellState[5].color : "white" }}>
                            </div>
                            <div class="col-md-3" style={{ backgroundColor: this.state.cellState[6].isClicked ? this.state.cellState[6].color : "white" }}>
                            </div>
                            <div class="col-md-3" style={{ backgroundColor: this.state.cellState[7].isClicked ? this.state.cellState[7].color : "white" }}>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3" style={{ backgroundColor: this.state.cellState[8].isClicked ? this.state.cellState[8].color : "white" }}>
                            </div>
                            <div class="col-md-3" style={{ backgroundColor: this.state.cellState[9].isClicked ? this.state.cellState[9].color : "white" }}>
                            </div>
                            <div class="col-md-3" style={{ backgroundColor: this.state.cellState[10].isClicked ? this.state.cellState[10].color : "white" }}>
                            </div>
                            <div class="col-md-3" style={{ backgroundColor: this.state.cellState[11].isClicked ? this.state.cellState[11].color : "white" }}>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3" style={{ backgroundColor: this.state.cellState[12].isClicked ? this.state.cellState[12].color : "white" }}>
                            </div>
                            <div class="col-md-3" style={{ backgroundColor: this.state.cellState[13].isClicked ? this.state.cellState[13].color : "white" }}>
                            </div>
                            <div class="col-md-3" style={{ backgroundColor: this.state.cellState[14].isClicked ? this.state.cellState[14].color : "white" }}>
                            </div>
                            <div class="col-md-3" style={{ backgroundColor: this.state.cellState[15].isClicked ? this.state.cellState[15].color : "white" }}>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }
        return (
            <ImageGridList />
        );
    }
}