import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    paper: {
        padding: theme.spacing(3, 2),
        textAlign: "left",
    }
  }));

function Dashboard(props) {
    const classes = useStyles();

    const handleClick = () => {
        alert('You clicked the Chip.');
    };

    // var props = {'a':20, 'b':30, 'c': 5};
    return (
        <>
        {/* <div className={classes.root}>
            <Chip size='medium' avatar={<Avatar>A</Avatar>} label={props.a} onClick={handleClick} />

            <Chip avatar={<Avatar>B</Avatar>} label={props.b} onClick={handleClick} />

            <Chip avatar={<Avatar>C</Avatar>} label={props.c} onClick={handleClick} />
        </div> */}
        <div className={classes.root}>
        <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
                A의 State
            </Typography>
            <Typography component="p">
                {props.a}
            </Typography>
        </Paper>
        <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
                B의 State
            </Typography>
            <Typography component="p">
                {props.b}
            </Typography>
        </Paper>
        <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
                C의 State
            </Typography>
            <Typography component="p">
                {props.c}
            </Typography>
        </Paper>
        </div>
        </>
    )
}

export default Dashboard


