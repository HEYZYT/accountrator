const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('dc/')

bot.on('ready', function(){
    bot.user.setGame(prefix + 'help');

})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'validation');
    if (!channel) return;
    channel.send("**Pour générer un code** fait la commande suivante : __**dc/generate**__ @everyone");
  });

bot.on("message", message => {
    if (message.content === prefix + "generate") {
        var embed = new Discord.RichEmbed()
            .setTitle("Code : !u3jYKh46")
        message.channel.sendEmbed(embed);
    }

        if(message.content === "dc"){
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.delete()
        message.channel.send("**Pour générer un code** fait la commande suivante : __**dc/generate**__ @everyone");
    }

    if(message.content === "!u3jYKh46") {
        var embed = new Discord.RichEmbed()
        .setTitle("Code Validé :white_check_mark:")
    message.channel.sendEmbed(embed);
    }
        
    if (message.content === prefix + "candidature") {
        var embed = new Discord.RichEmbed()
            .setTitle("Candidature Recrutements - STAFF :")
            .setDescription("Si vous souhaitez faire une candidature pour le STAFF de AccountRator c'est par ici!")
            .addField("Candidature Assistant", "[Nelyx - Fortnite](https://goo.gl/forms/HbvdUGsl9XWVN4Pf2)")
            .addField("Candidature Modérateur", "[Nelyx - Fortnite](https://goo.gl/forms/HbvdUGsl9XWVN4Pf2)")
            .setThumbnail("https://images-ext-1.discordapp.net/external/v6JHUmPI3owFTdb0Wa9_OYzlftwa5VGF70WvyWZ3Ssc/https/images-ext-1.discordapp.net/external/_veBMBMuqvtyKyNoVQJJj7Rb_hUI2N8P2kl-ncixLGM/https/valentinbraem.s-ul.eu/uEG28JXB:large")
            .setFooter("Ce sont des formulaires à remplir obligatoirement si vous voulez intégrer la STAFF")
        message.channel.sendEmbed(embed);
    }
});

bot.on('message', message => {
    if(message.content === prefix + 'infos') {
        let sicon = message.guild.iconURL;
        var embed = new Discord.RichEmbed()
        .setThumbnail(sicon)
        .setDescription('Infomations du Discord')
        .addField("Nom du Discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoins le", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord", message.guild.memberCount)
 
    message.channel.sendEmbed(embed)    
    }
})



bot.login(process.env.TOKEN);
