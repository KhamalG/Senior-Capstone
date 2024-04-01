const credentials = {
    username :'drive5',
    password : 'Senior24',
    server : 'team-a5.database.windows.net',
    database : 'team-a5',
}

module.exports = config = {
    server: credentials.server,  //update me
    authentication: {
        type: 'default',
        options: {
            userName: credentials.username, //update me
            password: credentials.password  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: credentials.database  //update me
    }
};

