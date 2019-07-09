interface  StylesObject  {
    screenContainer: React.CSSProperties;
    searchCountContainer: React.CSSProperties;
    topicsResultContainer: React.CSSProperties;
    idleMessageContainer: React.CSSProperties;
    errorMessageContainer: React.CSSProperties;
}

export const styles: StylesObject = {
    screenContainer: {
        margin: 10,
    },
    searchCountContainer: {
        paddingBottom: 10,
        marginBottom: 10,
        marginTop: 10,
        borderBottom: '1px solid rgba(0,0,0,1)',
        color: 'rgb(150,150,150)',
        fontSize: 12,
    },
    topicsResultContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        overflow: 'auto',
        height: '100%',
    },
    idleMessageContainer: {
        textAlign: 'center',
        fontSize: 14,
        margin: 20,
    },
    errorMessageContainer: {
        textAlign: 'center',
        fontSize: 14,
        margin: 20,
        color: 'red',
    }
}