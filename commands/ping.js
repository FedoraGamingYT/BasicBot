const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
    name: 'ping',
    description: 'Shows the websocket to client latency',
    usage: `${config.prefix}ping`,
    category: 'info',
    run: async (client,message) => {
        const wait = await message.channel.send("**🏓 Pinging**")
       wait.edit(new Discord.MessageEmbed()
    .setTitle('Client Ping')
    .setThumbnail(message.guild.iconURL())
    .addField("**Latency**", `\`${Date.now() - message.createdTimestamp}ms\``)
    .addField("**API Latency**", `\`${Math.round(client.ws.ping)}ms\``)
    .setTimestamp()
    .setFooter(config.botname))
}
}