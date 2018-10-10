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
    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes :")
            .setDescription("Commandes Disponible avec <@498564267755175966>")
            .addField("*help", "Affiche cette page")
            .addField("*candidature", "Affiche les Google Form disponible pour les candidature de la Nelyx - Team")
            .addField("*infos", "Affiche les infos du Discord ; ex : Nom du serveur, Date de création, etc...")
            .setFooter("En espérant que vous passerez du bon temps sur le Discord de la Nelyx - Team")
        message.channel.sendEmbed(embed);
    }



    if (message.content === prefix + "candidature") {
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
});

bot.on('message', message => {
    if(message.content === prefix + 'infos') {
        let sicon = message.guild.iconURL;
        var embed = new Discord.RichEmbed()
        .setThumbnail(sicon)
        .setDescription('Infomation du Discord')
        .addField("Nom du Discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoins le", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord", message.guild.memberCount)
 
    message.channel.sendEmbed(embed)    
    }

    if (message.content.startsWith("*sondage")) {
        if(message.author.id == "175656408459640832", "273848826270580737", "356185137379016706", "176740082340986880", "335150423776165908", "291332583067877378"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "✅ Pour Oui | ❌ Pour Non")
                .setColor("#FF00FF")
                .setFooter(`Sondage crée par ${message.author.username}`)
            message.guild.channels.find("name", "👌sondage👌").sendEmbed(embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
                message.channel.send("@everyone")
                console.log(`${message.author.username} viens de faire un sondage !`);
            })   .catch(function() {
            })
            }else{
                return message.reply("Tu n'as pas la permission!")
        }
    }
})

bot.login(process.env.TOKEN);

