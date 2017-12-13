const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const Discord = require("discord.js");
const bot = new Discord.Client();
const aws = require('aws-sdk');

let s3 = new aws.S3({
	accessKeyId: process.env.S3_KEY,
	secretAccessKey: process.env.TOKEN
});



bot.on("ready", () => {
	console.log("TyelasBOT : Opérationnel ^^");
});

bot.on("ready", () => {
	bot.user.setGame("^^");
	//bot.user.setUsername('Pierre Bernard')
	//bot.user.setAvatar("./Nagui.JPG")
});

bot.on('message', message => {
	if(message.content.includes("^^")) {
		message.react('〽')
		console.log("Quelqu'un a voulu faire une ÉMOTICÔNE SOURIRE.")
	}
	if(message.content.includes("😄")) {
		message.react('😡')
		console.log("Quelqu'un a osé faire un sourire.")
	}
	if(message.content.includes("😛")) {
		message.react('😡')
		console.log("Quelqu'un a osé tiré la langue.")
	}
	if(message.content.includes("😡")) {
		message.react(':FeelsHappyHug:371654974351998977')
		console.log("Quelqu'un est un homme en COLÈRE")
	}
	if(message.content === "*Hello darkness my old friend*") {
		message.channel.send("TG Huro")
	}
	if(message.content === "*Hello darkness my old friends*") {
		message.channel.send("TG Huro")
	}
	if(message.content === "_Hello darkness my old friend_") {
		message.channel.send("TG Huro")
	}
	if(message.content === "_Hello darkness my old friends_") {
		message.channel.send("TG Huro")
	}
	if(message.content === "TG Huro") {
		message.delete(300)
	}
	if(message.content.includes("Nagui")) {
		message.channel.send("NAGUI COUCOU")
	}
	if(message.content.includes("nagui")) {
		message.channel.send("NAGUI COUCOU")
	}
	if(message.content === "NAGUI COUCOU") {
		message.delete(1000)
	}
	if(message.content.includes("XD")) {
		message.react('🇽')
		message.react('🇩');
	}
	else if(message.content.includes("xD")) {
		message.react('🇽')
		message.react('🇩');
	}
	else if(message.content.includes("Xd")) {
		message.react('🇽')
		message.react('🇩');
	}
	if(message.content.includes("?")) {
		message.react('❓')
	}
	if(message.content.includes("??")) {
		message.react('❔')
	}
	if(message.content.includes("???")) {
		message.react(':mhQuestion:372499150673149952')
	}
	if(message.content.includes("????")) {
		message.react(':zrtPointdinterrogation:372499472271278090')
	}
	if(message.content === "A") {
		message.react('🇦')
	}
	if(message.content === "a") {
		message.react('🇦')
	}
	if(message.content === "B") {
		message.react('🇧')
	}
	if(message.content === "b") {
		message.react('🇧')
	}
	if(message.content === "C") {
		message.react('🇨')
	}
	if(message.content === "c") {
		message.react('🇨')
	}
	if(message.content === "D") {
		message.react('🇩')
	}
	if(message.content === "d") {
		message.react('🇩')
	}
	if(message.content === "E") {
		message.react('🇪')
	}
	if(message.content === "e") {
		message.react('🇪')
	}
	if(message.content === "F") {
		message.react('🇫')
	}
	if(message.content === "f") {
		message.react('🇫')
	}
	if(message.content === "G") {
		message.react('🇬')
	}
	if(message.content === "g") {
		message.react('🇬')
	}
	if(message.content === "H") {
		message.react('🇭')
	}
	if(message.content === "h") {
		message.react('🇭')
	}
	if(message.content === "I") {
		message.react('🇮')
	}
	if(message.content === "i") {
		message.react('🇮')
	}
	if(message.content === "J") {
		message.react('🇯')
	}
	if(message.content === "j") {
		message.react('🇯')
	}
	if(message.content === "K") {
		message.react('🇰')
	}
	if(message.content === "k") {
		message.react('🇰')
	}
	if(message.content === "L") {
		message.react('🇱')
	}
	if(message.content === "l") {
		message.react('🇱')
	}
	if(message.content === "M") {
		message.react('🇲')
	}
	if(message.content === "m") {
		message.react('🇲')
	}
	if(message.content === "N") {
		message.react('🇳')
	}
	if(message.content === "n") {
		message.react('🇳')
	}
	if(message.content === "O") {
		message.react('🇴')
	}
	if(message.content === "o") {
		message.react('🇴')
	}
	if(message.content === "P") {
		message.react('🇵')
	}
	if(message.content === "p") {
		message.react('🇵')
	}
	if(message.content === "Q") {
		message.react('🇶')
	}
	if(message.content === "q") {
		message.react('🇶')
	}
	if(message.content === "R") {
		message.react('🇷')
	}
	if(message.content === "r") {
		message.react('🇷')
	}
	if(message.content === "S") {
		message.react('🇸')
	}
	if(message.content === "s") {
		message.react('🇸')
	}
	if(message.content === "T") {
		message.react('🇹')
	}
	if(message.content === "t") {
		message.react('🇹')
	}
	if(message.content === "U") {
		message.react('🇺')
	}
	if(message.content === "u") {
		message.react('🇺')
	}
	if(message.content === "V") {
		message.react('🇻')
	}
	if(message.content === "v") {
		message.react('🇻')
	}
	if(message.content === "W") {
		message.react('🇼')
	}
	if(message.content === "w") {
		message.react('🇼')
	}
	if(message.content === "X") {
		message.react('🇽')
	}
	if(message.content === "x") {
		message.react('🇽')
	}
	if(message.content === "Y") {
		message.react('🇾')
	}
	if(message.content === "y") {
		message.react('🇾')
	}
	if(message.content === "Z") {
		message.react('🇿')
	}
	if(message.content === "z") {
		message.react('🇿')
	}
	if(message.content === "Ceci est un test") {
		message.channel.send("Ceci est un test")
	}
    if(message.content === "TAISEZ-VOUS !") {
        process.exit(1);
    }
    else if(message.content === "Taisez-vous !") {
        process.exit(1);
    }
    else if(message.content === "TAISEZ VOUS !") {
        process.exit(1);
    }
    else if(message.content === "Taisez vous !") {
        process.exit(1);
    }
    else if(message.content === "TAISEZ VOUS") {
        process.exit(1);
    }
    else if(message.content === "Taisez vous") {
        process.exit(1);
    }
    else if(message.content === "taisez-vous !") {
        process.exit(1);
    }
    else if(message.content === "taisez vous !") {
        process.exit(1);
    }
    else if(message.content === "taisez vous") {
        process.exit(1);
    }
    else if(message.content === "taisez-vous") {
        process.exit(1);
    }
    else if(message.content === "Taisez-vous") {
        process.exit(1);
    }
    else if(message.content === "TAISEZ-VOUS") {
        process.exit(1);
    }
    if(message.content === "!info") {
    	const embed = {
  			"title": "BOT \"Pierre Bernard\" <:Exotica:345609342264803338>",
  			"description": "Un bot créé par Yenaman, rassemblant quelques commandes (quelques idées de Kiron#2609 aussi :eyes:)",
  			"color": 1675721,
  			"footer": {
    			"icon_url": "https://cdn.discordapp.com/emojis/280092975407562752.png",
    			"text": "À demain ! TCHAO TCHAO TCHAO"
  			},
  			"thumbnail": {
    			"url": "https://cdn.discordapp.com/avatars/272416422444007424/3301c614cff3044b9daecd0eb01b0b5b.webp"
  			},
  			"author": {
    			"name": "Créateur : Yenaman#4134",
    			"icon_url": "https://cdn.discordapp.com/avatars/267357209187450884/a_10003bc4d8cfd24aab15ad4719009c1d.gif"
  			},
  			"fields": [
    		{
      		"name": "Fonctionnalités",
      		"value": "C'est un bot qui réagit à certaines phrases que **vous** devrez trouver !"
    		},
    		{
     		 "name": "Uptime",
      		"value": "Le bot sera en ligne de 9h du matin à 03h du matin pour votre plus grand bonheur <:blobheart:390132491106779136>"
    		},
    		{
      		"name": "TEDE ! TEDE !",
      		"value": "MANAWI TEDE ! <:TeteEmploi:390132517421973517>"
    		}
  			]
		};
		message.channel.send({embed});
	}
	if(message.content === "!ping") {
		message.channel.send('Ping du bot en cours...').then(sent => {
			sent.edit(`**Ping :** \`${sent.createdTimestamp - message.createdTimestamp} ms\``);
		});
	}
	if(message.content === "!membres") {
		message.channel.send(`This guild has ${guild.memberCount} members!`)
	}
});
bot.login(process.env.TOKEN);