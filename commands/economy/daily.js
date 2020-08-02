const db = require('quick.db');;
const duration = require ('humanize-duration');
const cooldowns = new Map();
module.exports = {
    name: "daily",
    aliases: ["day"],
    category: "economy",
    description: "Gives you your daily.",
    usage: "daily | day ",
    run: async (client, message, args) => {

        let amount = 50
        let amount2 = 200000

        const cooldown = cooldowns.get(message.author.id);
        if (cooldown) {
          const remaining = duration(cooldown - Date.now(), { units: [`h`,`m`,`s`], round: true});
        
          return message.channel.send(`You can collect your daily again in **${remaining}.**`)
            .catch(console.error);


        } else {

            message.channel.send(`You have recieved <:DS:730136362740875304> ${amount} and <:Zeni:730137065886449756> ${amount2}`)

            db.add(`stones_${message.author.id}`, amount)
            db.add(`zeni_${message.author.id}`, amount2)
            db.add(`daily_${message.author.id}`, Date.now())
            db.add(`daily2_${message.author.id}`, Date.now())

            cooldowns.set(message.author.id, Date.now() + 86400000);
            setTimeout(() => cooldowns.delete(message.author.id), 86400000);


        }
    }
}