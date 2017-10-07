// Welcome to our Discord.js Bot Guide!
const Discord = require('discord.js'); // The Discord.js Package
const client = new Discord.Client(); // The Discord Client

client.on('ready', () => { // The ready event
    console.log("I'm Online!"); // If the bot went on, console.log I'm Online!
});

client.on('message', (msg) => { // The message event
    if (msg.content === "ping") { // If message content is ping
        msg.channel.send("pong!"); // Send pong!
    }
});

client.login("MzY2MDk3NzcyNDkyODgxOTIw.DLn-XQ.C5QFxF7EJQSxLJ_hP6qrbB3YMcw") // Login witht he bot token