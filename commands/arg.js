const Discord = require("discord.js")
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
const failed = new Discord.MessageEmbed()
    .setTitle("Command failed!")
    .setDescription(`No argument was provided!`)
    .setColor('RED')
    if(!arg1) return message.channel.send(failed);
    message.channel.send(embed)
}
}