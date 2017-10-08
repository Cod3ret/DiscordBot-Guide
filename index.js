// Welcome to our Discord.js Bot Guide!
const Discord = require('discord.js'); // The Discord.js Package
const client = new Discord.Client(); // The Discord Client
const { PREFIX, TOKEN, OWNER } = require('./settings/config.js')

client.on('ready', () => { // The ready event
    console.log("I'm Online!"); // If the bot went on, console.log I'm Online!
});

client.on('message', (msg) => { // The message event
    const command = msg.content.split(" ")[0].slice(PREFIX.length); // This makes the content combine with the Prefix that you added
    const args = msg.content.split(" ").slice(1); // This defines args as, making the message content into substrings and returns a section of an array

    if (command === "ping") { // If the Command is Ping
        msg.channel.send('pong!'); // Reply pong!
    } else // Make a New Statement
    if (command === "say") { // If the Command is Say
        var yourmessage = args.join(" "); // Adds all the elements of an array seperated by the specified seperator string.

        if (!yourmessage) return msg.channel.send('Please add a message for the bot to say'); // If we didn't include this, there will be an error of, "Cannot Send an Empty Message"      

        /*
            Also like, says what you say with the Command!
            */

        msg.channel.send(yourmessage) // The bot says what you want it to say
    } else // Another Statement
    if (msg.channel.type === "dm") { // If the message channel type is in DM
        console.log(`[${msg.author.tag}] : ${msg.content}\nID: ${msg.author.id}`) // Console log the Message Author's Tag Name, ID and what he Said
    }
});

client.login(TOKEN) // Login with the bot token
