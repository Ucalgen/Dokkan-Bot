module.exports = client => {
   
   const channel2 = client.channels.cache.get('261884258979676162');

    channel2.send(`Users: ${client.users.cache.size}\nChannels: ${client.channels.cache.size}\nGuilds: ${client.guilds.cache.size}`);
    
        client.user.setPresence({
            status: 'dnd',
            activity: {
                name: 'Discord Ball Z is gay'
            }
        });
}