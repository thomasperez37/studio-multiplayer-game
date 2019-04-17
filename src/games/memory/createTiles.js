const createDiv = ({style, color})=> {
    return <div></div>
}

export default createDiv;

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 500,
  },
});

function ColorGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
     // creates the row
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
        // creates the individual tiles
          <GridListTile key={tile.div} cols={tile.cols || 1}>
            // the "1" creates the width of the tile in number of grid cells
            // what the tile looks like (the style)
            <div></div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ColorGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ColorGridList);