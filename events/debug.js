module.exports = (client, debug) => {
    if (!client.config.debug) return;
    else console.log(debug);
};
