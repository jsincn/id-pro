import React from 'react';
import { Container, Link} from '@material-ui/core';



export default class Footer extends React.Component {


    render() {

        return (
            <div>
                <div className="footer-copyright text-center py-3">
                    <Container>
                        Tool by <Link href="https://stei.ml">Jakob Steimle. </Link>Fork on <Link href="">Github</Link>.

                    </Container>
                </div>
            </div>)
    }
}