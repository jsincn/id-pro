import React from 'react';
import { Grid, Link} from '@material-ui/core';



export default class Footer extends React.Component {


    render() {

        return (
            <div>
                <Grid container spacing={3} style={{textAlign:'center'}}>
                    <Grid item md={12}>
                        Tool by <Link href="https://stei.ml">Jakob Steimle. </Link>Fork on <Link href="">Github</Link>.
                    </Grid>
        
                </Grid>
            </div>)
    }
}