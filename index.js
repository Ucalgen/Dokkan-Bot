const {Client, Collection} = require('discord.js');
const fs = require('fs');
const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = 'r!';
const { token } = require('./config.json');
client.commands = new Collection();
client.aliases = new Collection();

['command'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('message', message => {
    if (message.mentions.has(client.user)) {
    message.reply('My prefix is `r!` use r!help to view a list of the commands.');
}
});

client.on('message', async message => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});

fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`Loaded event '${evtName}'`);
        client.on(evtName, evt.bind(null, client));
    });
});

client.login(token)