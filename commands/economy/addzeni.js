const db = require('quick.db');
module.exports = {
    name: "adzeni",
    aliases: ["addz"],
    category: "economy",
    description: "Bot Owner only.",
    
    run: async (client, message, args) => {

        if (message.author.id !== '147422106215383040') {
            return;
        }

        const rm = message.mentions.users.first().id;

        const amount3 = message.content.slice(30);

        message.channel.send(`Added ${amount3} Zeni to ${rm.username}.`)

        db.add(`zeni_${rm}`, amount3)

    }
}