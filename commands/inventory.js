const { MessageEmbed } = require("discord.js")
exports.execute = async (client, message, args) => {
 
    const embed = new MessageEmbed()
        .setAuthor(`Inventory of ${message.author.tag}`, message.guild.iconURL)
        .setColor("RANDOM")
        .setThumbnail()
        .setTimestamp();
        const x = client.db.get(`items_${message.author.id}`);
    x.forEach(u => {
        embed.addField(`Name : ${u.name}.`, `Price : **${u.prize}**`);
    });
    return message.channel.send(embed);
}
exports.help = {
    name: "inventory",
    aliases: ["inv"],
    usage: `inv`
}
