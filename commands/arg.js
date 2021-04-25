const Discord = require("discord.js")
const config = require("../config.json")
module.exports = {
    name: "arg",
    description: "Gets the arg you runned after your command.",
    category: "fun",
run: async (client, message, args) => {
const arg1 = args[0]
const embed = new Discord.MessageEmbed()
    .setTitle("The arg you provided")
    .setDescription(`Your argument was "${arg1}"`)
    .setColor('GREEN')
    .setFooter(config.botname)
const failed = new Discord.MessageEmbed()
    .setTitle("Command failed!")
    .setDescription(`No argument was provided!`)
    .setColor('RED')
    .setFooter(config.botname)
    if(!arg1) return message.channel.send(failed);
    message.channel.send(embed)   
}
}