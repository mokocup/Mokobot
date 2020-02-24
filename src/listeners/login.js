module.exports = {
    event: "ready",
    requireClient: true,
    run: client => {
        console.log(`${client.user.tag} : Ready !`);
    }
};