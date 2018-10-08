const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('*')

bot.on('ready', function(){
    bot.user.setGame('*help');

})

bot.on('message'){
    if(message.content === ''

bot.login(process.env.TOKEN);

