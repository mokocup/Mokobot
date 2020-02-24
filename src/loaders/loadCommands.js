// https://discordjs.guide/command-handling/
const fs = require('fs');
const {Collection} = require('discord.js');

module.exports = client => {
    const commands = new Collection();
    fs.readdirSync(__dirname + '/../commands/').filter(file => file.endsWith('.js')).forEach(file => {
        const command = require(__dirname + `/../commands/${file}`);
        try {
            console.log(`Commands ${file} : Load Success`);
            commands.set(command.name, command);
        } catch {
            console.log(`Commands ${file} : Failed to load`)
        }
    });
    client.commands = commands;
};