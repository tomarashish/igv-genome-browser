import React, { Component } from 'react';
import { makeStyles , useTheme } from '@material-ui/core/styles';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputPage from './InputPage';

// The line below is enabled by ES6 export in igv.js.
//import igv from 'https://cdn.jsdelivr.net/npm/igv@2.10.5/dist/igv.esm.min.js';
import igv from 'igv';

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
      
        <InputPage/>

      </div>
    );
  }
}

class AppIgv extends Component {

  componentDidMount() {
    var igvContainer = document.getElementById('igv-div');
    var igvOptions = {
      // Example of fully specifying a reference .  We could alternatively use  "genome: 'hg19'"
                reference:
                    {
                        id: "hg19",
                        fastaURL: "https://s3.amazonaws.com/igv.broadinstitute.org/genomes/seq/1kg_v37/human_g1k_v37_decoy.fasta",
                        cytobandURL: "https://s3.amazonaws.com/igv.broadinstitute.org/genomes/seq/b37/b37_cytoband.txt"
                    },
                locus: "8:128,750,948-128,751,025",
                tracks:
                    [
                        {
                            name: "Phase 3 WGS variants",
                            type: "variant",
                            format: "vcf",
                            url: "https://s3.amazonaws.com/1000genomes/release/20130502/ALL.wgs.phase3_shapeit2_mvncall_integrated_v5b.20130502.sites.vcf.gz",
                            indexURL: "https://s3.amazonaws.com/1000genomes/release/20130502/ALL.wgs.phase3_shapeit2_mvncall_integrated_v5b.20130502.sites.vcf.gz.tbi"
                        },
                        {
                            type: 'alignment',
                            format: 'cram',
                            url: 'https://s3.amazonaws.com/1000genomes/phase3/data/HG00096/exome_alignment/HG00096.mapped.ILLUMINA.bwa.GBR.exome.20120522.bam.cram',
                            indexURL: 'https://s3.amazonaws.com/1000genomes/phase3/data/HG00096/exome_alignment/HG00096.mapped.ILLUMINA.bwa.GBR.exome.20120522.bam.cram.crai',
                            name: 'HG00096',
                            sort: {
                                chr: "chr8",
                                position: 128750986,
                                option: "BASE",
                                direction: "ASC"
                            },
                            height: 600
                        },

                        {
                            name: "Genes",
                            type: "annotation",
                            format: "bed",
                            url: "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/refGene.hg19.bed.gz",
                            indexURL: "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/refGene.hg19.bed.gz.tbi",
                            order: Number.MAX_VALUE,
                            visibilityWindow: 300000000,
                            displayMode: "EXPANDED"
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
