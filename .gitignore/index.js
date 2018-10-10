const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('*')

bot.on('ready', function(){
    bot.user.setGame('*help');

})

bot.on("guildMemberRemove", member => {
    member.guild.fetchAuditLogs().then(function(logs) {
        let log = logs.entries.first();
        if (log.action === "MEMBER_BAN_ADD") {
            member.guild.channels.find("name", "aéroport").send(`Ça ne doit pas être une grosse perte, ${member} viens de se faire bannir du serveur de la **${member.guild.name}** ; il n'avais surrement pas lu le <#431231993267879946>`);
        } else {
            member.guild.channels.find("name", "aéroport").send(`Quel dommage, ${member} viens de quitter le serveur de la **${member.guild.name}** !`);
        }
    }).catch(console.log);
})


bot.on("message", message => {
    if (message.content === prefix + " help") {
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes :")
            .setDescription("Commandes Disponible avec <@468821156473077760>")
            .addField("!n help", "Affiche cette page")
            .addField("!n twitter", "Affiche le twitter de la Nelyx - Team")
            .addField("!n facebook", "Affiche la page Facebook de la Nelyx - Team")
            .addField("!n twitch", "Affiche les chaînes Twitch de la Nelyx - Team")
            .addField("!n instagram", "Affiche l'Instagram de la Nelyx - Team")
            .addField("!n candidature", "Affiche les Google Form disponible pour les candidature de la Nelyx - Team")
            .addField("!n infos", "Affiche les infos du Discord ; ex : Nom du serveur, Date de création, etc...")
            .setColor("0xFE2E2E")
            .setFooter("En espérant que vous passerez du bon temps sur le Discord de la Nelyx - Team")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " twitter") {
        var embed = new Discord.RichEmbed()
            .setTitle("Le Twitter :")
            .setDescription("[@NelyxTV](https://twitter.com/NelyxTV)")
            .setThumbnail("https://pbs.twimg.com/media/DiYnFwFW0AAcXQZ.jpg")
            .setColor("0x01A9DB")
            .setFooter("N'hésitez pas à vous abonner !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " facebook") {
        var embed = new Discord.RichEmbed()
            .setTitle("La Page Facebook :")
            .setDescription("[@NelyxTV](https://www.facebook.com/NelyxTV/)")
            .setThumbnail("https://static-cdn.jtvnw.net/jtv_user_pictures/1ebfa2cc-9c03-42e7-8d41-41e0bd1f2aef-profile_image-300x300.png")
            .setColor("0x0431B4")
            .setFooter("N'hésitez pas à liker la page !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " twitch") {
        var embed = new Discord.RichEmbed()
            .setTitle("Les Chaînes Twitch :")
            .setDescription("Nelyx - Team possède plusieurs Web TV sur Twitch")
            .addField("Web TV - Fortnite", "[NelyxFortnite](https://www.twitch.tv/nelyxfortnite)")
            .addField("Web TV - Overwatch", "[NelyxOverwatch](https://www.twitch.tv/nelyxoverwatch)")
            .addField("Web TV - Autres", "[NelyxTTV](https://www.twitch.tv/nelyxttv)")
            .setThumbnail("https://static-cdn.jtvnw.net/jtv_user_pictures/1ebfa2cc-9c03-42e7-8d41-41e0bd1f2aef-profile_image-300x300.png")
            .setColor("0x610B5E")
            .setFooter("N'hésitez pas à nous follow !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " instagram") {
        var embed = new Discord.RichEmbed()
            .setTitle("L'Instagram :")
            .setDescription("[@nelyxtv](https://www.instagram.com/nelyxtv/)")
            .setThumbnail("https://static-cdn.jtvnw.net/jtv_user_pictures/1ebfa2cc-9c03-42e7-8d41-41e0bd1f2aef-profile_image-300x300.png")
            .setColor("0x000000")
            .setFooter("N'hésitez pas à vous abonner !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " candidature") {
        var embed = new Discord.RichEmbed()
            .setTitle("Candidature Nelyx - Team :")
            .setDescription("Si vous souhaitez faire une candidature pour la Nelyx - Team c'est ici que sa ce passe")
            .addField("Candidature Fortnite", "[Nelyx - Fortnite](https://goo.gl/forms/HbvdUGsl9XWVN4Pf2)")
            .addField("Candidature Overwatch", "[Nelyx - Overwatch](https://goo.gl/forms/194lyH5jU0lsXTBH2)")
            .addField("Candidature Paladins", "[Nelyx - Paladins](https://goo.gl/forms/Jf9l4haLC6VvNmkU2)")
            .setThumbnail("https://pbs.twimg.com/media/DibwUXIXcAUli_m.jpg:large")
            .setColor("0x0489B1")
            .setFooter("Ce sont des formulaires à remplir obligatoirement si vous voulez intégrer la Nelyx - Team")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " infos") {
        var embed = new Discord.RichEmbed()
            .setDescription("Informations sur le Discord :")
            .addField("Nom du Discord", message.guild.name)
            .addField("Crée le", "Mercredi 04 Avril 2018 à 13h06 (Heure de Paris)")
            .addField("Tu as rejoint le", message.member.joinedAt)
            .addField("Nombres de membres sur le Discord", message.guild.memberCount)
            .setThumbnail("https://pbs.twimg.com/media/DibwUXIXcAUli_m.jpg:large")
            .setColor("0x0404B4")
        message.channel.sendEmbed(embed)
    }

});

bot.login(process.env.TOKEN);

