const {
    MessageEmbed , GuildMember
} = require('discord.js');
const db = require('quick.db');
const cooldowns = new Map();
const duration = require('humanize-duration');
module.exports = {
    name: "shop",
    category: "economy",
    description: "The shop",
    usage: "shop",
    run: async (client, message, args) => {


        const stone = '<:DS:730136362740875304>'
        const zeni = '<:Zeni:730137065886449756>'


        const embed = new MessageEmbed()
            .setTitle('Shop')
            .addFields({
                name: 'Stone Pack 1 <:DS:730136362740875304> 50',
                value: 'Price <:Zeni:730137065886449756> 100,000'
            }, {
                name: 'Stone Pack 2 <:DS:730136362740875304> 75',
                value: 'Price <:Zeni:730137065886449756> 150,000'
            }, {
                name: 'Stone Pack 3 <:DS:730136362740875304> 100',
                value: 'Price <:Zeni:730137065886449756> 200,000'
            }, {
                name: `Stone Pack 4 ${stone} 150 `,
                value: `Price ${zeni} 400,000`
            }, {
                name: `Stone Pack 5 ${stone} 300`,
                value: `Price ${zeni} 800,000`
            }, {
                name: `Stone Pack 6 ${stone} 600`,
                value: `Price ${zeni} 1,300,000`
            }, {
                name: `Free Stones (Weekly) ${stone} 1000`,
                value: `Free stones cause why not tbh !`
            })
            .setFooter(`Your zeni: ${db.fetch(`zeni_${message.author.id}`)}`)

        message.channel.send(embed).then(async embed => {
            await embed.react('1️⃣');
            await embed.react('2️⃣');
            await embed.react('3️⃣');
            await embed.react('4️⃣');
            await embed.react('5️⃣');
            await embed.react('6️⃣');
            await embed.react('🎁');

            embed.delete({
                timeout: 90000
            })
        })


        client.on('messageReactionAdd', async (reaction, user) => {
            
            
            let user2 = db.fetch(`zeni_${message.author.id}`);

            const {
                emoji
            } = reaction;


            if (user.bot) {
                return;
            }
            
           if (user.id !== message.author.id) {
               return;
           }
            

            if (emoji.name === '1️⃣') {

                if (user2 < 100000) {
                    client.users.cache.get(message.author.id).send('You cannot afford that.')
                } else {
                    
                    client.users.cache.get(message.author.id).send('You have successfully purchased **Stone Pack 1.**')


                    db.add(`stones_${message.author.id}`, 50);
                    db.subtract(`zeni_${message.author.id}`, 100000);
                };

            }
            if (emoji.name === '2️⃣') {
                if (user2 < 150000) {
                    client.users.cache.get(message.author.id).send('You cannot afford that.')
                } else {
                    client.users.cache.get(message.author.id).send('You have successfully purchased **Stone Pack 2.**')

                    db.add(`stones_${message.author.id}`, 75);
                    db.subtract(`zeni_${message.author.id}`, 150000);
                }
            };

            if (emoji.name === '3️⃣') {
                if (user2 < 200000) {
                    client.users.cache.get(message.author.id).send('You cannot afford that.')
                } else {
                    client.users.cache.get(message.author.id).send('You have successfully purchased **Stone Pack 3.**')

                    db.add(`stones_${message.author.id}`, 100);
                    db.subtract(`zeni_${message.author.id}`, 200000);
                }
            };

            if (emoji.name === '4️⃣') {
                if (user2 < 400000) {
                    client.users.cache.get(message.author.id).send('You cannot afford that.')
                } else {
                    client.users.cache.get(message.author.id).send('You have successfully purchased **Stone Pack 4.**')

                    db.add(`stones_${message.author.id}`, 200);
                    db.subtract(`zeni_${message.author.id}`, 400000);
                }
            };

            if (emoji.name === '5️⃣') {
                if (user2 < 800000) {
                    client.users.cache.get(message.author.id).send('You cannot afford that.')
                } else {
                    client.users.cache.get(message.author.id).send('You have successfully purchased **Stone Pack 5.**')

                    db.add(`stones_${message.author.id}`, 300);
                    db.subtract(`zeni_${message.author.id}`, 800000);
                }
            };

            if (emoji.name === '6️⃣') {
                if (user2 < 1300000) {
                    client.users.cache.get(message.author.id).send('You cannot afford that.')
                } else {
                    client.users.cache.get(message.author.id).send('You have successfully purchased **Stone Pack 6.**')

                    db.add(`stones_${message.author.id}`, 600);
                    db.subtract(`zeni_${message.author.id}`, 1300000);
                }
            };
            if (emoji.name === '🎁') {
                const cooldown = cooldowns.get(message.author.id);
                if (cooldown) {
                    const remaining = duration(cooldown - Date.now(), {
                        units: [`mo`, `d`, `h`, `m`, `s`],
                        round: true
                    })
                    client.users.cache.get(message.author.id).send(`Come back in **${remaining}** to claim again.`)
                } else {
                    client.users.cache.get(message.author.id).send('Enjoy your free stones! Come back in a week for more free stones!')

                    db.add(`stones_${message.author.id}`, 1000);

                    cooldowns.set(message.author.id, Date.now() + 604800000);
                    setTimeout(() => cooldowns.delete(message.author.id), 604800000);
                };
            }
        })
    }
}