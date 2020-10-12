module.exports = (client) => {
    console.log(`${client.user.tag} is online!`);
    setInterval(() => {
        const statusArray = client.config.games;
        const randomStatus = Math.floor(Math.random() * statusArray.length);
        const status = statusArray[randomStatus];
        client.user.setActivity(
            status.name
            .replace("{prefix}", client.config.prefix)
            .replace("{users}", client.users.cache.size.toLocaleString())
            .replace("{servers}", client.guilds.cache.size.toLocaleString()),
            { 
                type: status.type 
            });
    }, 7000);
};
