import * as React from 'react';
import styles from './Footer.module.scss';
import { useIsFrontpage } from '../../core/hooks/UseIsFrontpage';
import { RouteComponentProps, withRouter } from 'react-router';
import classnames from 'classnames';

function Footer(props: RouteComponentProps) {
    const isFrontpage = useIsFrontpage(props.location.pathname);
    const componentClass = classnames(
        styles.footer,
        {[styles.frontpage]: isFrontpage},
    );
    return (
        <footer className={componentClass}>
            <div className={styles.javabin}>
                <a target="_blank" href="https://javabin.no">
                    Made by javaBin
                </a>
                <a target="_blank" href="https://java.no/principles">
                    Code of Conduct
                </a>
            </div>
            <div className={styles.social}>
                <a target="_blank" href="mailto:javazone@java.no">
                    Mail
                </a>
                <a target="_blank" href="https://twitter.com/javazone">
                    Twitter
                </a>
                <a target="_blank" href="https://facebook.com/javazoneconference">
                    Facebook
                </a>
            </div>
        </footer>
    )
}

export default withRouter(Footer);