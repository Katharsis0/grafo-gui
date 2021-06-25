import React from 'react';
import MyTheme from './MyTheme';

//Importar componentes
import {Typography,ButtonGroup,AppBar,Toolbar,IconButton,Box, Button, Grid} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
//Importar iconos
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import BlurOn from '@material-ui/icons/BlurOn';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

const App= () => {
    //Funcion de graficar
    const graficar=()=>{console.log("Generar grafos")}
    const borrar=()=>{console.log("Eliminar grafos")}

    return (
        <>
                <CssBaseline />
                <MuiThemeProvider theme= {MyTheme}>
                <div className= "Header">
                    <AppBar color="primary" position= "static" >
                        <Toolbar>
                            <Typography variant="h3" textalign= "right">
                                    <BubbleChartIcon/>
                                    CallMeGraph.io
                                    <BubbleChartIcon/>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className= "Botones">
                <Grid container direction= "column" alignItems= "center" justify= "center">
                <ButtonGroup>
                    <Button style={{fontSize: 30}} endIcon={<BlurOn/>} size="large" variant='contained' color= "secondary"
                    onClick={()=>{graficar()}}>
                        Generar Grafos
                    </Button>
                    <Button endIcon={<DeleteSweepIcon/>} size="large" variant='contained' style={MyTheme.palette.companyRed}
                    onClick={()=>{borrar()}}>
                        Eliminar Grafos
                    </Button>
                    </ButtonGroup>
                </Grid>
                </div>
                </MuiThemeProvider>
        </>
    );
}

export default App;


