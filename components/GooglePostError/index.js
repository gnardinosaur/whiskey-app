import React from 'react';
import styles from './styles.scss';

function GooglePostError(props) {
    const errorMessage = `Uh oh, we have an issue - \n\n${props.message}`;
    return (
        <div className={styles.errorMessage}>
            {errorMessage}
        </div>
    )
}

export default GooglePostError;