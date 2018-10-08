const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('*')

bot.on('ready', function(){
    bot.user.setGame('*help');

})

bot.login('NDk4NTY0MjY3NzU1MTc1OTY2.DpvkGg.g2MsLWDHBxN96n7zwROH0-4McMw');

