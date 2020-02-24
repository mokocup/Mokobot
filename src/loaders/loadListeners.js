// https://discordjs.guide/command-handling/
const fs = require('fs');

module.exports = client => {
    fs.readdirSync(__dirname + '/../listeners/').filter(file => file.endsWith('.js')).forEach(file => {
        const listeners = require(__dirname + `/../listeners/${file}`);
        try {
            if (listeners && listeners.requireClient)
                client.on(listeners.event, () => {
                    listeners.run(client)
                });
            else
                client.on(listeners.event, listeners.run);
            console.log(`Listeners ${file} : Load Success`);
        } catch {
            console.log(`Listeners ${file} : Failed to load`);
        }
    });
};