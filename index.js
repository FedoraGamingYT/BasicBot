// Gets discord.js and fs.
const Discord = require("discord.js");
const fs = require("fs");
// Gets the config file and makes the discord client
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;
client.snipe = new Map();
// Gets all the events (event handler)
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        console.log(eventName + ' ready')
    });
});

client.commands = new Discord.Collection();
// Gets all the commands and console logs every command when they load.
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`)
        if(err) return console.log(error);
        client.commands.set(commandName, props)
    });
});
// Logs in the bot
client.login(config.token);