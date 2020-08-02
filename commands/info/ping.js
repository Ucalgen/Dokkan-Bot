module.exports = {
    name: "ping",
    category: "info",
    description: "Pings the bot.",
    usage: "ping",
    run: async (client, message, args) => {
        message.channel.send("Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`");

    }
}
