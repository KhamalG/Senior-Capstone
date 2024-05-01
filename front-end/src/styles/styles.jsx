
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
        padding: '5px',
    },
    headerComponent: {
        display: 'flex',
        justifyContent: 'space-evenly',
        border: '5px solid gray',
        padding: '10px'
    },
    link: {
        color: 'white',
        border: '3px solid red',
        backgroundColor: 'black',
        padding: '10px',
    },
    pageButton: {
        padding: '5px',
        fontSize: '10pt',
        fontFamily: 'Courier',
    },
    pageBody: {
        fontFamily: 'Courier',
        fontSize: '12pt',
        padding: '10px',
    },
    pageTitle: {
        fontFamily: 'Courier',
        fontSize: '18pt',
        padding: '5px',
    },
    modalBackground: {
        fontFamily: 'Courier',
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
        fontFamily: 'Courier',
        fontWeight: 'bold',
        paddingRight: '10px',
    },
    text: {
        fontFamily: 'Courier',
      paddingRight: '10px', 
    },
    labelBackground: {
        display: 'flex-inline'
    },
    button: {
        padding: '10px',
        border: '2px solid gray',
        margin: '10px',
        fontFamily: 'Courier',
    },
    header: {
        fontFamily: 'Courier',
        fontWeight: 'bold',
    },
    tableHead: {
        fontFamily: 'Courier',
        margin: '5px',
        padding: '5px',
        fontWeight: 'bold',
        fontSize: '14pt',
    },
    tableBody: {
        fontFamily: 'Courier',
        fontSize: '12pt',
        margin: '5px',
        padding: '5px',
    },
}

export const tableStyles = {
    tableBody : {
        width : "100%",
    },
    table : {
        display: 'block',
        overflow: 'hidden',
        tableLayout: 'fixed',
        borderCollapse: 'collapse',
        boxShadow: '0px 10px 10px #050A30',
        borderRadius: '10px',
        whiteSpace: 'nowrap',
        width: '1250px',
        maxWidth: '80%',
        margin: 'auto',
        overflowX: 'auto',
        backgroundColor: '#fff',
    },
    tableHeader: {
        backgroundColor: '#6495ED',
        color: '#fff',
    },
    th: {
        padding: '0.8rem'
    },
    td: {
        borderTop: '0.5px solid #ddd',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center'
    },
    tr: {
        "&:hover": {
        background: "#efefef"
        }
    },
    expand: {
        padding: '0.8rem',
        width: '100%'
    },
    avg : {
        display: 'flex',
        justifyContent: 'spaceAround'
    }, 
    actions : {
        display: "flex",
        justifyContent: "space-around"
    },
    bodyHeader : {
        display: "flex-row",
    },
    body: {
        paddingBottom : "15px",
        position: 'relative',
        transform: 'translate(-50%)',
        alignItems: 'center',
        justifyContent: 'center',
        left: '50%',
        top: '175px',
    }, 
    title : {
        position: 'relative',
        top: '125px',
        left: '50%',
        transform: 'translate(-50%)',
    },
    bodyheaderButton : {
        display: 'flex',
        justifyContent: 'right'
    },
    bodyheaderTitle: {
        display: 'flex',
        justifyContent: 'center'
    },
    label: {
        borderRadius: '3px',
        padding: '0.3rem',
        color: 'white'
    },
    labelPreparing: {
        borderRadius: '3px',
        padding: '0.3rem',
        backgroundColor: '#ffff00'
    },
    labelEnRoute: {
        backgroundColor: '#4d79ff',
        borderRadius: '3px',
        padding: '0.3rem',
    },
    labelArrived: {
        backgroundColor: '#ff1a1a',
        borderRadius: '3px',
        padding: '0.3rem',
    },
    labelDelivered: {
        backgroundColor: '#009900',
        borderRadius: '3px',
        padding: '0.3rem',
    },
    labelEnRouteHub: {
        backgroundColor: '#4d79ff',
        borderRadius: '3px',
        padding: '0.3rem',
    },
    labelArrivedHub: {
        backgroundColor: '#ff9900',
        borderRadius: '3px',
        padding: '0.3rem',
    },
}

export const headerStyles = {
    items: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '1.2rem',
      padding: '0 30px',
      backgroundColor: '#6495ED',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.25)',
      width: '95%',
      height: '80px',
      borderRadius: '13px',
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translate(-50%)',
    },
    menu : {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, auto)',
      gridGap: '10px',
      listStyle: 'none',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'end'
    },
    navlinks : {
      textDecoration: 'none',
      color: '#fff', 
      padding: '0.7rem 1rem',
      whiteSpace: "nowrap"
    },
    icon : {
      marginLeft: '0.2rem',
      fontSize: '1.6rem',
    }
  }


export const modalStyles = {
    modalContainer: {
        position: 'fixed',
        zIndex: 1,
        left: 0, 
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modal: {
        borderRadius: '5px',
        padding: '2rem',
        backgroundColor: 'white',
        width: '25em',
    },
}

export default styles;