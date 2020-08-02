const db = require ('quick.db');
module.exports = {
    name: "addstones",
    aliases: ["adds"],
    category: "economy",
    description: "Bot Owner only.",
    
    run: async (client, message, args) => {

        if (message.author.id !== '147422106215383040')  {
            return;
        }

        const rm = message.mentions.users.first().id;

        const amount3 = message.content.slice(30);

        message.channel.send(`Added ${amount3} Stones to ${rm.username}.`)

        db.add(`stones_${rm}`, amount3)
    }
}