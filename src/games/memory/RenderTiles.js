import createTiles from "./createTiles"
function renderTiles(color){
    var customStyle = {
        backgroundColor: color
        };
    return createTiles({
        style: customStyle,
        color: color
    });
}

export default renderTiles;
