const {Client} = require('discord.js');
const {token} = require('./config.js');
const loadLoader = require('./utils/loadLoader');

let client = new Client();

loadLoader(client);

client.login(token).catch(error => {
    console.log(error);
    process.exit(1);
});

