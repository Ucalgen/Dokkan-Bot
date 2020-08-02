const discord = require ('discord.js');
const db = require ('quick.db');
const a = require (`discord.js-pagination`);
module.exports = {
    name: "profile",
    aliases: ["pf"],
    category: "info",
    description: "Shows the profile of a user.",
    usage: "profile | pf",
    run: async (client, message, args) => {

        const user2 = message.mentions.users.first() || message.author;
        let money = db.fetch(`stones_${user2.id}`)
        let money2 = db.fetch(`zeni_${user2.id}`)
        let summons = db.fetch(`summons_${user2.id}`)
        if (money === null) money = 0
        if (money2 === null) money2 = 0
        if (summons === null) summons = 0
        const stone = '<:DS:730136362740875304>'
        const zeni = '<:Zeni:730137065886449756>'

        const embed = new discord.MessageEmbed()

        .setTitle(user2.username)
        .addFields(
            {name: 'Rank:', value: 'Coming Soon', inline: true},
            {name: 'Summons:', value: summons, inline: true},
            {name: `${stone} Dragon Stones:`, value: `${money}`, inline: true},
            {name: 'World Tournament Rank:', value: 'Coming Soon', inline: true},
            {name: '\u200B', value: '\u200B', inline: true}, 
            {name: `${zeni} Zeni:`, value: `${money2}`, inline: true},
            {name: '⭐ Favorite:', value: '<:LR:730137277979951174> Gogeta (Super Saiyan Blue)'}
            )
        .setImage('https://i.redd.it/leio9xovktd41.jpg')
      

        message.channel.send(embed)

    }
}