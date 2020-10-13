exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1000) + 500;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`You have already claimed your weekly credit. Come back after ${addMoney.time.days} days, ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} seconds to claim it again.`);
    else return message.reply(`You have claimed **${addMoney.amount}** 💸 as your weekly credit & now you have **${addMoney.after}** 💸. Lol Make sure to subscribe to ZeroSync or ill take all ur money!`);
};

exports.help = {
    name: "weekly",
    aliases: [],
    usage: "weekly"
}
