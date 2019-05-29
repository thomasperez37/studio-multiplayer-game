import React from "react";

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const index = this.props.index;
        console.log(this.props);
        let color;
        if(this.props.clicked || this.props.matched) {
            color = this.props.color;
        }else {
            color = "#fff";
        }
        return(
            <div style={{"backgroundColor" : color, "width" : "30px", "height" : "30px", "border" : "2px solid black", "display" : "inline-block"}} onClick={() => this.props.handler(index)}>
            </div>
        );
    }
}