import React, { Component } from 'react';
import { makeStyles , useTheme } from '@material-ui/core/styles';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// The line below is enabled by ES6 export in igv.js.
import igv from 'https://cdn.jsdelivr.net/npm/igv@2.10.5/dist/igv.esm.min.js';

var  appStyle = {
  fontFamily: 'helveticaneue,helvetica neue,Helvetica,Arial,sans-serif',
    backgroundColor: '#000',
    color:'#fff',
    marginBottom:'100px',
  }

var igvStyle = {
fontFamily: 'open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif',
  paddingTop: '60px',
  margin: '5px'
}

class App extends Component {

  render() {

    return (
      <div className="App">
      <AppBar position="fixed" style={appStyle}>
        <Toolbar>

          <Typography variant="h6" >
            IGV Genome Browser
          </Typography>
        </Toolbar>
      </AppBar>
        <AppIgv/>
      </div>
    );
  }
}

class AppIgv extends Component {

  componentDidMount() {
    var igvContainer = document.getElementById('igv-div');
    var igvOptions = {
      // Example of fully specifying a reference .  We could alternatively use  "genome: 'hg19'"
      locus: "chr22",
  genome: "hg38",
  tracks: [
      {
          url: "https://s3.amazonaws.com/igv.org.demo/nstd186.GRCh38.variant_call.vcf.gz",
          indexURL: "https://s3.amazonaws.com/igv.org.demo/nstd186.GRCh38.variant_call.vcf.gz.tbi",
          name: "Color by table, SVTYPE",
          visibilityWindow: -1,
          colorBy: "SVTYPE",
          colorTable: {
              "DEL": "#ff2101",
              "INS": "#001888",
              "DUP": "#028401",
              "INV": "#008688",
              "CNV": "#8931ff",
              "BND": "#891100",
              "*": "#002eff"
          }
      }
  ]
    };
    return igv.createBrowser(igvContainer, igvOptions);
  }

  render() {
    return (
      <div id="igv-div" style={igvStyle}></div>
    );
  }
}


export default App;
