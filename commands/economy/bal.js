const db = require ('quick.db');

module.exports = {
    name: "bal",
    aliases: ["stones"],
    category: "economy",
    description: "Displays how many stones you have.",
    usage: "bal | stones",
    run: async (client, message, args) => {
        let user = message.author

        let money = db.fetch(`stones_${user.id}`)
        let money2 = db.fetch(`zeni_${user.id}`)

        if (money === null) money = 0
        if (money2 === null) money2 = 0

        message.channel.send(`<:DS:730136362740875304> ${money}\n<:Zeni:730137065886449756> ${money2}`)

    }
}