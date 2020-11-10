// Imports
const Discord = require('discord.js');
const client = new Discord.Client();

// Variables
const replies = [
    'Aye Aye, Captain! 🦀🦀🦀',
    `I can't hear youuuuu! 🦀🦀🦀 `,
    `Who lives in a 🍍 under the sea?`
];

// Setup
require('dotenv').config();
client.login(process.env.BOT_TOKEN);

// Actions
client.on('ready', () => console.log("Ready!"));
client.on('message', replyMessage);

// Functions
function replyMessage(msg){
    if (msg.channel.id === process.env.TEST_CHANNEL && msg.content.toLowerCase() === "arrr you ready kids?!") {
        const i = Math.floor(Math.random() * replies.length);
        msg.reply(replies[i]);
    }
}