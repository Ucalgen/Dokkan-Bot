const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        const economy = new Discord.MessageEmbed()
        .setTitle('Help')
        .addField('`r!bal`', 'Shows you how many stones and zeni you have.')
        .addField('`r!daily`', 'Gives you your daily.')
        .addField('`r!hourly`', 'Gives you your hourly.')
        .addField('`r!shop`', `Opens up the shop where you can buy stuff from.`)
        .addField('`r!multisummon`', `Allows you to do a multi-summon.`)
        .setTimestamp()

    
        const pages = [
                economy
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}