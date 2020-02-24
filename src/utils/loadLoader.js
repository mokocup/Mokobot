// https://discordjs.guide/command-handling/
const fs = require('fs');

module.exports = client => {
    fs.readdirSync(__dirname + '/../loaders/').filter(file => file.endsWith('.js')).forEach(file => {
        require(__dirname + `/../loaders/${file}`)(client);
    });
};