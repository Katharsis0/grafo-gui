import React from 'react';

//Importar componentes
import {Typography,ButtonGroup,AppBar,Toolbar,IconButton,Box, Button, Grid} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
//Importar iconos
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import BlurOn from '@material-ui/icons/BlurOn';
//Import colores
import {orange} from '@material-ui/core/colors';

const theme= createMuiTheme({
    palette: {
        primary: {
            main: orange[200],
        },
    }
})


const App= () => {
    return (
        <>
                <CssBaseline />
                <ThemeProvider>
                <div className= "App">
                    <AppBar color="secondary" position= "static" >
                        <Toolbar>
                            <Typography variant="h3" textAlign= "right">
                                    <BubbleChartIcon/>
                                    CallMeGraph.io
                                    <BubbleChartIcon/>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <Grid container direction= "column" alignItems= "center" justify= "center">
                <header className= "App-header">
                <ButtonGroup>
                    <Button style={{fontSize: 30}} endIcon={<BlurOn/>} size="large" variant='contained' color="green">
                        Generar Grafo
                    </Button>
                    <Button style={{fontSize: 30}} endIcon={<DeleteSweepIcon/>} size="large" variant='contained' color="primary">
                        Eliminar Grafo
                    </Button>
                    </ButtonGroup>
                </header>
                </Grid>
                </ThemeProvider>
        </>
    );
}

export default App;


