import React from 'react';
import { Grid, Link} from '@material-ui/core';



export default class Footer extends React.Component {


    render() {

        return (
            <div>
                <Grid container spacing={3} style={{textAlign:'center'}}>
                    <Grid item md={6}>
                        Tool by <Link href="https://stei.ml">Jakob Steimle. </Link>Fork on <Link href="">Github</Link>.
                    </Grid>
                    <Grid item md={6}>
                        Die zu Verlosenden Tickets werden zur Verfügung gestellt mit freundlicher Unterstüzung von
                        <div>
                        <img src="logoTripsdrill.png" alt="Logo Tripsdrill" style={{height:5 +'em'}}></img>
                        </div>
                    </Grid>
                </Grid>
            </div>)
    }
}