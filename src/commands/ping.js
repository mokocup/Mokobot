module.exports = {
    name: "ping",
    aliases: ['p', 'pong'],
    guildOnly: true,
    run: async function (message) {
        const newMessage = await message.channel.send({
            embed: {
                title: "Pinging 🏓",
                description: 'Ping Ping...'
            }
        });
        await newMessage.edit({
            embed: {
                title: 'Pong! 🏓',
                description: `${newMessage.createdTimestamp - message.createdTimestamp} ms`
            }
        });
    }
};