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

    var i = 0;

    files.filter(file => file.endsWith('.js')).forEach(file => {
        const event = require(`./events/${file}`);

        let eventName = file.split(".")[0];

        client.on(eventName, event.bind(null, client));

        i++;
    });

    console.log(`Loaded ${i} events!`)
});

client.commands = new Discord.Collection();

// Gets all the commands and console logs every command when they load.
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);

    var i = 0;

    files.filter(file => file.endsWith('.js')).forEach(file => {
        let props = require(`./commands/${file}`);

        let commandName = file.split(".")[0];

        client.commands.set(commandName, props)

        i++;
    });

    console.log(`Loaded ${i} commands!`)
});

// Logs in the bot
client.login(config.token);