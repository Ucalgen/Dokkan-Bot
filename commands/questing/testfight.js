const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
    name: "fight",
    category: "questing",
    description: "a fight",
    usage: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    run: async (client, message, args) => {

        let a = db.fetch(`temp_${message.author.id}`);

        if (a === 0) {
            db.add(`temp_${message.author.id}`, 1000)
        } else {

            const moves = [
                'Punch',
                'Kick',
                'Slap',
                'Heal'
            ]

            let damage = Math.floor(Math.random() * 500 + 1);

            let currenthealth = 1000;

            let emove = Math.floor(Math.random() * moves.length);

            let amount = currenthealth - damage

            if (a < 0) {
                message.channel.send('You have died.')
                db.delete(`temp_${message.author.id}`)
            }

            if (damage) {
                if (moves[emove] === 'Punch') {
                    db.subtract(`temp_${message.author.id}`, amount)

                    db.subtract(`temp_${message.author.id}`, amount)
                    message.channel.send(`Punched for ${damage}.\nYou have ${a} left.`)
                }
                if (moves[emove] === 'Kick') {
                    db.subtract(`temp_${message.author.id}`, amount)
                    message.channel.send(`Kicked for ${damage}.\nYou have ${a} left.`)
                }
                if (moves[emove] === 'Slap') {
                    db.subtract(`temp_${message.author.id}`, amount)
                    message.channel.send(`Slapped for ${damage}.\nYou have ${a} left.`)
                }
            }
        }
    }
}