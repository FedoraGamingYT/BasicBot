const { MessageEmbed } = require("discord.js");
const config = require("../config.json");
const { readdirSync } = require('fs')
module.exports = {
    name: "help", 
    description: "Get all commands",
    usage: `${config.prefix}help`,
    category: "info",
    run: async (client, message, args) => {
        function cap(command) {
            return command.charAt(0).toUpperCase() + command.slice(1);
          }
        let embed = new MessageEmbed()
        .setAuthor('Help section')
        .setDescription(`These are the commands for **${client.user.username}**`)
        .setFooter(config.botname)
client.commands.forEach(cmd => {
    const x = cap(`${cmd.name}`)
    if(!cmd.category) {
    embed.addField(`**${x}**`, `\`${cmd.description}\`\n **Category**: none specified`, false)
    } else {
        embed.addField(`**${x}**`, `\`${cmd.description}\`\n **Category**: ${cmd.category}`, false)
    }
})

message.channel.send(embed)
// I dont wanna list category wise bad bad
    }
}