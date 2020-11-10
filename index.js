// Imports
const Discord = require('discord.js');
const client = new Discord.Client();

// Setup
require('dotenv').config();
client.login(process.env.BOT_TOKEN);

// Actions
client.on('ready', () => console.log("Ready!"));

// Functions