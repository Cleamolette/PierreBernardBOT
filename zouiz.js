const express = require('express') //Port app Heroku
const path = require('path') //Port app Heroku
const PORT = process.env.PORT || 5000 //Port app Heroku

express() //Port app Heroku
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
const Discord = require("discord.js");
const bot = new Discord.Client();
const aws = require('aws-sdk'); //Token Heroku

let s3 = new aws.S3({ //Token Heroku
	accessKeyId: process.env.S3_KEY,
	secretAccessKey: process.env.TOKEN
});


bot.on("ready", () => {
	bot.user.setGame("!info");
	//bot.user.setUsername('Mimiron')
	//bot.user.setAvatar("./Mimiron.jpg")
	console.log("TyelasBOT : Opérationnel ^^");
});

bot.on('message', message => {
//	if(message.content.includes("^^")) {
//		message.react(':this:390917955942219796')
//		message.react(':this2:390917955984293889')
//		console.log("Quelqu'un a voulu faire une ÉMOTICÔNE SOURIRE.")
//	}
//	if(message.content.includes("😄")) {
//		message.react('😡')
//		console.log("Quelqu'un a osé faire un sourire.")
//	}
//	if(message.content.includes("😛")) {
//		message.react('😡')
//		console.log("Quelqu'un a osé tiré la langue.")
//	}
	if(message.content.includes("😡")) {
		message.channel.send("JE SUIS UN HOMME EN COLÈRE ! https://yenaman.s-ul.eu/J3RY8Io5")
		console.log("Quelqu'un est un homme en COLÈRE")
		bot.channels.get("391601508158013440").send(">> Commande ``Homme en colère``")
	}
	if(message.content === "JE SUIS UN HOMME EN COLÈRE ! https://yenaman.s-ul.eu/J3RY8Io5") {
		message.delete(1000);
	}
	if(message.content === "*Hello darkness my old friend*") {
		message.channel.send("TG Huro")
		bot.channels.get("391601508158013440").send(">> Commande ``*Hello darkness my old friend*``")
	}
	if(message.content === "*Hello darkness my old friends*") {
		message.channel.send("TG Huro")
		bot.channels.get("391601508158013440").send(">> Commande ``*Hello darkness my old friends*``")
	}
	if(message.content === "_Hello darkness my old friend_") {
		message.channel.send("TG Huro")
		bot.channels.get("391601508158013440").send(">> Commande ``_Hello darkness my old friend_``")
	}
	if(message.content === "_Hello darkness my old friends_") {
		message.channel.send("TG Huro")
		bot.channels.get("391601508158013440").send(">> Commande ``_Hello darkness my old friends_``")
	}
	if(message.content === "TG Huro") {
		message.delete(300)
	}
	if(message.content === "Nagui") {
		message.channel.send("NAGUI COUCOU")
		bot.channels.get("391601508158013440").send(">> Commande ``Nagui``")
	}
	if(message.content === "nagui") {
		message.channel.send("NAGUI COUCOU")
		bot.channels.get("391601508158013440").send(">> Commande ``nagui``")
	}
	if(message.content === "NAGUI COUCOU") {
		message.delete(1000)
	}
//	if(message.content.includes("XD")) {
//		message.react('🇽')
//		message.react('🇩');
//	}
//	if(message.content.includes("xD")) {
//		message.react('🇽')
//		message.react('🇩');
//	}
//	if(message.content.includes("Xd")) {
//		message.react('🇽')
//		message.react('🇩');
//	}
//	if(message.content.includes("?")) {
//		message.react('❓')
//	}
	if(message.content.includes("??")) {
		message.react('❔')
		message.react('❓');
	}
	if(message.content.includes("???")) {
		message.react(':mhQuestion:372499150673149952')
	}
	if(message.content.includes("????")) {
		message.react(':zrtPointdinterrogation:372499472271278090')
	}
//	if(message.content === "A") {
//		message.react('🇦')
//	}
//	if(message.content === "a") {
//		message.react('🇦')
//	}
//	if(message.content === "B") {
//		message.react('🇧')
//	}
//	if(message.content === "b") {
//		message.react('🇧')
//	}
//	if(message.content === "C") {
//		message.react('🇨')
//	}
//	if(message.content === "c") {
//		message.react('🇨')
//	}
//	if(message.content === "D") {
//		message.react('🇩')
//	}
//	if(message.content === "d") {
//		message.react('🇩')
//	}
//	if(message.content === "E") {
//		message.react('🇪')
//	}
//	if(message.content === "e") {
//		message.react('🇪')
//	}
//	if(message.content === "F") {
//		message.react('🇫')
//	}
//	if(message.content === "f") {
//		message.react('🇫')
//	}
//	if(message.content === "G") {
//		message.react('🇬')
//	}
//	if(message.content === "g") {
//		message.react('🇬')
//	}
//	if(message.content === "H") {
//		message.react('🇭')
//	}
//	if(message.content === "h") {
//		message.react('🇭')
//	}
//	if(message.content === "I") {
//		message.react('🇮')
//	}
//	if(message.content === "i") {
//		message.react('🇮')
//	}
//	if(message.content === "J") {
//		message.react('🇯')
//	}
//	if(message.content === "j") {
//		message.react('🇯')
//	}
//	if(message.content === "K") {
//		message.react('🇰')
//	}
//	if(message.content === "k") {
//		message.react('🇰')
//	}
//	if(message.content === "L") {
//		message.react('🇱')
//	}
//	if(message.content === "l") {
//		message.react('🇱')
//	}
//	if(message.content === "M") {
//		message.react('🇲')
//	}
//	if(message.content === "m") {
//		message.react('🇲')
//	}
//	if(message.content === "N") {
//		message.react('🇳')
//	}
//	if(message.content === "n") {
//		message.react('🇳')
//	}
//	if(message.content === "O") {
//		message.react('🇴')
//	}
//	if(message.content === "o") {
//		message.react('🇴')
//	}
//	if(message.content === "P") {
//		message.react('🇵')
//	}
//	if(message.content === "p") {
//		message.react('🇵')
//	}
//	if(message.content === "Q") {
//		message.react('🇶')
//	}
//	if(message.content === "q") {
//		message.react('🇶')
//	}
//	if(message.content === "R") {
//		message.react('🇷')
//	}
//	if(message.content === "r") {
//		message.react('🇷')
//	}
//	if(message.content === "S") {
//		message.react('🇸')
//	}
//	if(message.content === "s") {
//		message.react('🇸')
//	}
//	if(message.content === "T") {
//		message.react('🇹')
//	}
//	if(message.content === "t") {
//		message.react('🇹')
//	}
//	if(message.content === "U") {
//		message.react('🇺')
//	}
//	if(message.content === "u") {
//		message.react('🇺')
//	}
//	if(message.content === "V") {
//		message.react('🇻')
//	}
//	if(message.content === "v") {
//		message.react('🇻')
//	}
//	if(message.content === "W") {
//		message.react('🇼')
//	}
//	if(message.content === "w") {
//		message.react('🇼')
//	}
//	if(message.content === "X") {
//		message.react('🇽')
//	}
//	if(message.content === "x") {
//		message.react('🇽')
//	}
//	if(message.content === "Y") {
//		message.react('🇾')
//	}
//	if(message.content === "y") {
//		message.react('🇾')
//	}
//	if(message.content === "Z") {
//		message.react('🇿')
//	}
//	if(message.content === "z") {
//		message.react('🇿')
//	}
    if(message.content === "TAISEZ-VOUS !") {
		process.exit(1);
    }
    if(message.content === "Taisez-vous !") {
        process.exit(1);
    }
    if(message.content === "TAISEZ VOUS !") {
        process.exit(1);
    }
    if(message.content === "Taisez vous !") {
        process.exit(1);
    }
    if(message.content === "TAISEZ VOUS") {
        process.exit(1);
    }
    if(message.content === "Taisez vous") {
        process.exit(1);
    }
    if(message.content === "taisez-vous !") {
        process.exit(1);
    }
    if(message.content === "taisez vous !") {
        process.exit(1);
    }
    if(message.content === "taisez vous") {
        process.exit(1);
    }
    if(message.content === "taisez-vous") {
        process.exit(1);
    }
    if(message.content === "Taisez-vous") {
        process.exit(1);
    }
    if(message.content === "TAISEZ-VOUS") {
        process.exit(1);
    }
    if(message.content === "!info") { //Embed !info
    	const embed = {
  			"title": "BOT \"Mimiron\"",
  			"description": "Un bot créé par Yenaman, rassemblant quelques commandes (quelques idées de <@246807099332362240> aussi :eyes:)",
  			"color": 1675721,
  			"footer": {
    			"icon_url": "https://cdn.discordapp.com/emojis/280092975407562752.png",
    			"text": "À demain ! TCHAO TCHAO TCHAO"
  			},
  			"thumbnail": {
    			"url": "https://cdn.discordapp.com/attachments/389904952656658432/391005256131018762/Mimiron.jpg"
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
      		"value": "Le bot sera en ligne de 9h du matin à 03h du matin pour votre plus grand bonheur <:blobheart:390132491106779136> Pourquoi ? Parce que le bot a besoin d'être hors-ligne 6 heures par jour."
    		}
  			]
		};
		message.channel.send({embed});
		bot.channels.get("391601508158013440").send(">> Commande ``!info``")
		
	}
	if(message.content === "!ping") { //Commande !ping
		message.channel.send('Ping du bot en cours...').then(sent => {
			sent.edit(`**Ping :** \`${sent.createdTimestamp - message.createdTimestamp} ms\``);
		});
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date} >> Commande !ping`)
	}
	if(message.content === "!spam") { //Embed !spam
		const embed = {
			"title": "Rappel des règles quant au *spam*",
			"color": 15472173,
			"thumbnail": {
			  "url": "https://cdn.discordapp.com/emojis/332985690075693059.png"
			},
			"fields": [
			  {
				"name": "Règle 2",
				"value": "Pas d'insultes/**Spam**/**Flood** ni racisme, homophobie"
			  },
			  {
				"name": "Règle 5",
				"value": "Conversations bordel nawak : <#388127187615744002> ou <#388170884722196490>. **Sanction : Rétrogradation**"
			  }
			]
		  };
		  message.channel.send({embed});
		  bot.channels.get("391601508158013440").send(">> Commande ``!spam``")
	}
	if(message.content === "!help") { //Embed !help
		const embed = {
			"title": "__Commandes__",
			"description": "Liste des commandes *\"publiques\"* disponibles. Il y en a peu pour le moment.",
			"color": 12195794,
			"thumbnail": {
			  "url": "https://cdn.discordapp.com/emojis/315210423223713802.png"
			},
			"fields": [
			  {
				"name": "!help",
				"value": "Affiche ce message"
			  },
			  {
				"name": "!ping",
				"value": "Envoie une requête au bot et affiche le temps qu'elle a pris pour être renvoyée (le ping du bot en soi)"
			  },
			  {
				"name": "!info",
				"value": "Affiche tout un tas d'informations au sujet du bot, dont son utilité"
			  },
			  {
				  "name": "!s",
				  "value": "Affiche un rappel des règles quand au **s**pam"
			  }
			]
		  };
		  message.channel.send({embed});
		  bot.channels.get("391601508158013440").send(">> Commande ``!help``")
	}
	if(message.content === "bouton rouge") {
		message.channel.send("Oh ! Vous avez vu ? Il est magnifiquement rougeâtre, n'appuyez pas dessus !")
		bot.channels.get("391601508158013440").send(">> Commande ``bouton rouge``")
	}
	if(message.content === "Bouton rouge") {
		message.channel.send("Oh ! Vous avez vu ? Il est magnifiquement rougeâtre, n'appuyez pas dessus !")
		bot.channels.get("391601508158013440").send(">> Commande ``Bouton rouge``")
	}
	if(message.content === "Appuie sur le bouton rouge") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		bot.channels.get("391601508158013440").send(">> Commande ``Appuie sur le bouton rouge``")
	}
	if(message.content === "*Appuie sur le bouton rouge*") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		bot.channels.get("391601508158013440").send(">> Commande ``*Appuie sur le bouton rouge*``")
	}
	if(message.content === "_Appuie sur le bouton rouge_") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		bot.channels.get("391601508158013440").send(">> Commande ``_Appuie sur le bouton rouge_``")
	}
	if(message.content === "appuie sur le bouton rouge") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		bot.channels.get("391601508158013440").send(">> Commande ``appuie sur le bouton rouge``")
	}
	if(message.content === "*appuie sur le bouton rouge*") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		bot.channels.get("391601508158013440").send(">> Commande ``*appuie sur le bouton rouge*``")
	}
	if(message.content === "_appuie sur le bouton rouge_") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		bot.channels.get("391601508158013440").send(">> Commande ``_appuie sur le bouton rouge_``")
	}
	if(message.content === "Appuyer sur le bouton rouge") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		bot.channels.get("391601508158013440").send(">> Commande ``Appuyer sur le bouton rouge``")
	}
	if(message.content === "*Appuyer sur le bouton rouge*") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		bot.channels.get("391601508158013440").send(">> Commande ``*Appuyer sur le bouton rouge*``")
	}
	if(message.content === "_Appuyer sur le bouton rouge_") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		bot.channels.get("391601508158013440").send(">> Commande ``_Appuyer sur le bouton rouge_``")
	}
	if(message.content === "appuyer sur le bouton rouge") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		bot.channels.get("391601508158013440").send(">> Commande ``appuyer sur le bouton rouge``")
	}
	if(message.content === "*appuyer sur le bouton rouge*") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		bot.channels.get("391601508158013440").send(">> Commande ``*appuyer sur le bouton rouge*``")
	}
	if(message.content === "_appuyer sur le bouton rouge_") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		bot.channels.get("391601508158013440").send(">> Commande ``_appuyer sur le bouton rouge_``")
	}
	if(message.content.includes("<@272416422444007424>")) {
		message.react(':ThumbsUp:391304799599067146')
		bot.channels.get("391601508158013440").send(">> Commande ``@Mimiron``")
	}
	if(message.content === "!aki start") {
		const embed = {
			"title": "Information",
			"description": "La <@356065937318871041> peut parler **Français** :flag_fr: ! Si vous n'avez pas défini vos paramètres de langue, il suffit de lancer **la commande** ``!aki lang fr`` dans <#388170884722196490> ou <#388844665111183360> puis de lancer une **nouvelle partie** avec ``!aki start``. Amusez-vous bien !",
			"color": 4783882,
			"thumbnail": {
			  "url": "https://cdn.discordapp.com/avatars/356065937318871041/58bd0ecfce3f3b90ef4cedd440e2ce5d.png"
			}
		  };
		  message.reply({embed});
		  bot.channels.get("391601508158013440").send(">> Commande ``!aki start``")
	}
	if(message.content === "c'est un test bouritadaco") {
		bot.channels.get("391601508158013440").send("tonté crétin d'âne pouta les ogres c'est comme les couilles")
	}
});

bot.login(process.env.TOKEN);