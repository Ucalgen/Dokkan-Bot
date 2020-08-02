const db = require ('quick.db');
module.exports = {
    name: "removestones",
    aliases: ["rms"],
    category: "economy",
    description: "Bot Owner only.",

    run: async (client, message, args) => {

        if (message.author.id !== '147422106215383040')  {
            return;
        }

        const rm = message.mentions.users.first().id;

        const amount3 = message.content.slice(28);

        message.channel.send(`Removed ${amount3} Stones from ${rm.username}.`)

        db.subtract(`stones_${rm}`, amount3)
    }
}