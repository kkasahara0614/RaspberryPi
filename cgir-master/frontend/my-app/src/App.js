import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import TvIcon from '@material-ui/icons/Tv';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs>
              <IconButton color="primary" aria-label="upload picture" component="span">
                  <PowerSettingsNewIcon color="secondary" style={{ fontSize: 70 }}/>
              </IconButton>
          </Grid>
          <Grid item xs alignItems="center">
              <Button variant="outlined" color="secondary" style={{ fontSize: '18px' }} >
                  入力切替
              </Button>
          </Grid>
          <Grid item xs>
              <IconButton color="primary" aria-label="upload picture" component="span">
                  <VolumeOffIcon color="secondary" style={{ fontSize: 70 }}/>
              </IconButton>
          </Grid>
      </Grid>
      
      <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item xs/>
          <Grid item xs>
              <Button style={{ fontSize: '30px', color: '#aaaaaa' }} >
                  1
              </Button>
          </Grid>
          <Grid item xs/>
          <Grid item xs>
              <Button style={{ fontSize: '30px', color: '#aaaaaa' }} >
                  2
              </Button>
          </Grid>
          <Grid item xs/>
          <Grid item xs>
              <Button style={{ fontSize: '30px', color: '#aaaaaa' }} >
                  3
              </Button>
          </Grid>
          <Grid item xs/>
      </Grid>

      <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item xs/>
          <Grid item xs>
              <Button style={{ fontSize: '30px', color: '#aaaaaa' }} >
                  4
              </Button>
          </Grid>
          <Grid item xs/>
          <Grid item xs>
              <Button style={{ fontSize: '30px', color: '#aaaaaa' }} >
                  5
              </Button>
          </Grid>
          <Grid item xs/>
          <Grid item xs>
              <Button style={{ fontSize: '30px', color: '#aaaaaa' }} >
                  6
              </Button>
          </Grid>
          <Grid item xs/>
          </Grid>

          <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item xs/>
          <Grid item xs>
              <Button style={{ fontSize: '30px', color: '#aaaaaa' }} >
                  7
              </Button>
          </Grid>
          <Grid item xs/>
          <Grid item xs>
              <Button style={{ fontSize: '30px', color: '#aaaaaa' }} >
                  8
              </Button>
          </Grid>
          <Grid item xs/>
          <Grid item xs>
              <Button style={{ fontSize: '30px', color: '#aaaaaa' }} >
                  9
              </Button>
          </Grid>
          <Grid item xs/>
      </Grid>

      <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item xs/>
          <Grid item xs>
              <Button style={{ fontSize: '30px', color: '#aaaaaa' }} >
                  10
              </Button>
          </Grid>
          <Grid item xs/>
          <Grid item xs>
              <Button style={{ fontSize: '30px' , color: '#aaaaaa'}} >
                  11
              </Button>
          </Grid>
          <Grid item xs/>
          <Grid item xs>
              <Button style={{ fontSize: '30px', color: '#aaaaaa' }} >
                  12
              </Button>
          </Grid>
          <Grid item xs/>
      </Grid>
      
      <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item xs>
              <Grid container alignItems="center" justify="center">
                  <Grid item xs={6}>
                      <IconButton color="primary" aria-label="upload picture" component="span">
                          <VolumeUpIcon color="secondary" style={{ fontSize: 35 }}/>
                      </IconButton>
                  </Grid>
                  <Grid item xs={6}>
                      <IconButton color="primary" aria-label="upload picture" component="span">
                          <AddCircleIcon color="secondary" style={{ fontSize: 30 }}/>
                      </IconButton>
                      <IconButton color="primary" aria-label="upload picture" component="span">
                          <RemoveCircleIcon color="secondary" style={{ fontSize: 30 }}/>
                      </IconButton>
                  </Grid>
              </Grid>
          </Grid>
      
          <Grid item xs>
              <Button variant="outlined" color="secondary" style={{ fontSize: '20px' }} >
                  番組表
              </Button>
          </Grid>
      
          <Grid item xs>
              <Grid container alignItems="center" justify="center">
                  <Grid item xs={6}>
                      <IconButton color="primary" aria-label="upload picture" component="span">
                          <TvIcon color="secondary" style={{ fontSize: 35 }}/>
                      </IconButton>
                  </Grid>
              <Grid item xs={6}>
                  <IconButton color="primary" aria-label="upload picture" component="span">
                      <ExpandLessIcon color="secondary" style={{ fontSize: 30 }}/>
                  </IconButton>
                  <IconButton color="primary" aria-label="upload picture" component="span">
                      <ExpandMoreIcon color="secondary" style={{ fontSize: 30 }}/>
                  </IconButton>
              </Grid>
          </Grid>
      </Grid>
     
      </Grid>
      </div>
    );
  }
}

export default App;
