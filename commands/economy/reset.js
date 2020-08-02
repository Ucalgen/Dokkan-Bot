const db = require ('quick.db');
module.exports = {
    name: "resetbalance",
    aliases: ["rb"],
    category: "economy",
    description: "Resets a user's balance",
    usage: "rb @user",
    run: async (client, message, args) => {

        if (message.author.id !== '147422106215383040') {
            return;
        }

        const userid =  message.mentions.users.first().id;

        db.delete(`stones_${userid}`)
        db.delete(`zeni_${userid}`)



    }
}