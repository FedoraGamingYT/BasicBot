const Discord = require("discord.js");
const config = require("../config.json");
const got = require('got')
module.exports = {
    name: "meme",
    description: "Get a random pic off of dankmemes reddit!",
    usage: "!meme ",
    category: "fun",
    run: async ( client, message, args ) => {
        const embed = new Discord.MessageEmbed()
        // using fetch here
        got(`https://www.reddit.com/r/dankmemes/random/.json`).then(response => {
            let content = JSON.parse(response.body);
            let permalink = contentc[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments} Bot name: ${config.botname}`)
            message.channel.send(embed);
        })
    }
}