import React from "react";

export default class ResetButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button onClick={() => this.props.handle()}>Reset</button>
        );
    }
}