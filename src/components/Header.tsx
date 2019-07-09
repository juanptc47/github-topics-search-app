import * as React from 'react';

// Assets
import * as githubLogo from '../assets/img/github_logo.png';

interface  StylesObject  {
    headerWrapper: React.CSSProperties,
    headerContainer: React.CSSProperties,
    logoWrapper: React.CSSProperties,
    dummyDiv: React.CSSProperties,
}

const styles: StylesObject = {
    headerWrapper: {
        height: 60,
        width: '100%',
        backgroundColor: 'black',
        boxShadow: '0 3px 5px rgba(50,50,50,0.5)',
        position: 'fixed',
        zIndex: 999,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        maxWidth: 1024,
        margin: '0 auto',
    },
    logoWrapper: {
        height: 40,
        width: 40,
        marginLeft: 20,
        backgroundColor: 'red'
    },
    dummyDiv: {
        height: 60,
    }
}

interface HeaderProps {

}
interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {
    render() {
        return(
            <div style={{width: '100%'}}>
                <div style={styles.headerWrapper}>
                    <div style={styles.headerContainer}>
                        <div style={styles.logoWrapper}>
                            <img src={githubLogo} width='100%' height='100%' />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div style={styles.dummyDiv} />
            </div>
        );
    }
}

export default Header;
