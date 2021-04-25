const Discord = require('discord.js');
const config = require("../config.json");
const db = require('quick.db');

const failed = new Discord.MessageEmbed()
.setTitle("Failed!")
.addField("Failed due to:", `You did not provide a channel.\nYou do not have the permission: ADMINISTRATOR`)

module.exports = {
    name: 'verifychannel',
    description: 'Sets the verify channel!',
    usage: `${config.prefix}setverifychannel`,
    category: 'verification',
    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(failed)

        const channel = message.mentions.channels.first() || message.guilds.channels.cache.get(args[0]);
        if(!channel) return message.channel.send(failed);

        db.set(`verificationchannel_${message.guild.id}`, channel.id);

                 
        const success = new Discord.MessageEmbed()
        .setTitle(`${config.botname} has successfully set a verification channel!`)
        .setDescription(`Set the verification channel to: ${channel}`)
        .setFooter(config.botname) 

        return message.channel.send(success);
    }
}