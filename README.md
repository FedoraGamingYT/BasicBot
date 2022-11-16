### Fed & Zero's Starter bot!
# Made with ❤ by Zero and Fedora.
How to use
Command example:
```js
const Discord = require("discord.js"); // Gets discord.js, Config file and got.
const config = require("../config.json");
const got = require("got");
module.exports = { //Exports to index.js if ran.
    name: "meme", // Name of the cmd.
    description: "Get a random pic off of dankmemes reddit!", //Description of the command.
    usage: "!meme ", //Usage of command
    category: "fun", // Command category
    run: async (client, message, args) => {
        // code here
    }
}
```

Configurating the bot:

```js
{
    "token": "", // Token of bot.
    "prefix": "!", // Prefix of bot.
    "botname": "" // Name of bot
}
```

Thanks for using our starter bot! 

Copyright, Zero & Fed. 2021
