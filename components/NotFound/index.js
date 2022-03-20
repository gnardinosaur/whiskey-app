import React from 'react';
import styles from './styles.scss';
import Layout from '../Layout/index';
import HeaderImage from '../HeaderImage/index';

function NotFound(props) {
    return (
        <Layout>
            <HeaderImage />
            <div className={styles.fourOhFourContainer}>
                <h1>
                    /404
                </h1>
                <h3>
                    Sorry laddie, the whiskie's run out here.
                </h3>
            </div>
        </Layout>
    )
}

export default NotFound;
