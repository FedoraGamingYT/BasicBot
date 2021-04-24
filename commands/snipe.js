const { MessageEmbed } = require ("discord.js")
const config = require('../config.json')
module.exports = {
name : "snipe",
description: "test",
category: "fun",
 run: async ( client, message, args ) => {
  const sniped = client.snipe.get(message.channel.id)
        if(!sniped) return message.channel.send("Nothing to snipe here :P")
        const embed = new MessageEmbed()
        .setAuthor(sniped.author, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(sniped.content)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(config.botname)
        if(sniped.image)embed.setImage(sniped.image)
        message.channel.send(embed)
    }
}