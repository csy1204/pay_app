import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Dashboard from './components/dashboard';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    color: 'white',
    '& > *': {
      margin: theme.spacing(1),
      color: 'white',
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));



function App() {
  const classes = useStyles();
  const [data, setData] = useState({a:0, b:0, c:0})
  const [from, setFrom] = useState('a')
  const [to, setTo] = useState('b')
  const [mid, setMid] = useState('c')
  const [money, setMoney] = useState(5)



  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  const fetchData = async () => {

  };

  const handleClick = async () => {
    alert("Transaction Submitted!");
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          IBM PAY
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Dashboard a={data.a} b={data.b} c={data.c} />
        <p>
          {JSON.stringify(data)} <br/>
          블록체인을 이용해 돈을 주고 받을 수 있습니다!
        </p>
      <div className={classes.root}>
      <FormControl variant="filled"  className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">From</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          <MenuItem value={'a'}>A</MenuItem>
          <MenuItem value={'b'}>B</MenuItem>
          <MenuItem value={'c'}>C</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled"  className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">To</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          <MenuItem value={'a'}>A</MenuItem>
          <MenuItem value={'b'}>B</MenuItem>
          <MenuItem value={'c'}>C</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled"  className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Mid</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mid}
          onChange={(e) => setMid(e.target.value)}
        >
          <MenuItem value={'a'}>A</MenuItem>
          <MenuItem value={'b'}>B</MenuItem>
          <MenuItem value={'c'}>C</MenuItem>
        </Select>
      </FormControl>
      <TextField
          id="standard-number"
          label="Money"
          type="number"
          color='secondary'
          style={{'color':'white'}}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          value={money}
          onChange={(e)=>setMoney(e.target.value)}
          margin="normal"
      />
      </div>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        onClick={handleClick}
      >
        Send
      </Button>
      </header>
    </div>
  );
}

export default App;
