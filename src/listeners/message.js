//https://discordjs.guide/command-handling/dynamic-commands.html
const {prefix, owners} = require('../config.js');
const getCommand = require('../utils/getCommand');

module.exports = {
    event: "message",
    run: async (message) => {

        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = getCommand(message, commandName);

        if (!command) return;

        console.log((message.channel.type === 'ztext' ? `${message.guild.name}#${message.channel.name}|` : '') + `${message.author.tag}: ${message.content}`);

        if (command.ownersOnly && !owners.includes(message.author.id)) return;
        if (command.guildOnly && message.channel.type !== 'text') return;
        if (command.requireArgs && !args.length) return;

        await command.run(message, args);

        if (command.deleteCommand) message.delete({timeout: 1000})
    }
};