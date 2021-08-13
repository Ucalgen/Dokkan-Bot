const { Client, Intents } = require('discord.js');
const { btoken } = require('./configs/tokens.json')

const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

bot.once('ready', () => {
	console.log('Ready!');
});

bot.login(btoken);