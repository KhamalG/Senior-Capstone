const styles = {
    loginBody: {
        color: 'black',
        fontFamily: 'Courier',
        textAlign:'center',
        backgroundColor: 'white',
        fontSize: '16pt',
    },
    loginHeader: {
        color: 'white',
        fontFamily: 'Courier',
        backgroundColor: 'gray',
        fontSize:'30pt',
    },
    loginLabel: {
        fontFamily: 'Courier',
        fontSize: '14pt',
        padding: '5px',
    },
    loginButton: {
        fontFamily: 'Courier',
        fontSize: '14pt',
        padding: '3px',
    },
    headerComponent: {
        display: 'flex',
        justifyContent: 'space-evenly',
        border: '5px solid gray',
    },
    modalBackground: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(200, 200, 200)',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: '500px',
        height: '500px',
        borderRadius: '12px',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        display: 'flex',
        flexDirection: 'column',
        padding: '25px'
    },
    label: {
        fontFamily: 'Copperplate',
        fontWeight: 'bold',
        paddingRight: '10px',
    },
    text: {
      fontFamily: 'Copperplate' ,
      paddingRight: '10px', 
    },
    labelBackground: {
        display: 'flex-inline'
    },
    button: {
        padding: '10px',
        border: '2px solid gray',
        margin: '10px',
        fontFamily: 'Copperplate',
    },
    header: {
        fontFamily: 'Copperplate',
        fontWeight: 'bold',
    },
}

export default styles;