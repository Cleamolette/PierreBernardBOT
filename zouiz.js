const express = require('express') //Port app Heroku
const path = require('path') //Port app Heroku
const PORT = process.env.PORT || 5000 //Port app Heroku
const aws = require('aws-sdk'); //Token Heroku
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const config = require("./config.json");

express() //Port app Heroku
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
let s3 = new aws.S3({ //Token Heroku
	accessKeyId: process.env.S3_KEY,
	secretAccessKey: process.env.TOKEN
});

fs.readdir("./commands/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
	  let eventFunction = require(`./commands/${file}`);
	  let eventName = file.split(".")[0];
	  bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
	});
 });

bot.on('message', message => {
	if (message.author.bot) return;
  	if(message.content.indexOf(config.prefix) !== 0) return;
  	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();
  	try {
    	let commandFile = require(`./commands/${command}.js`);
    	commandFile.run(bot, message, args);
  	} catch (err) {
    	console.error(err);
  }
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
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande Homme en colère`)
	}
	if(message.content === "JE SUIS UN HOMME EN COLÈRE ! https://yenaman.s-ul.eu/J3RY8Io5") {
		message.delete(1000);
	}
	if(message.content === "*Hello darkness my old friend*") {
		message.channel.send("TG Huro")
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande *Hello darkness my old friend*`)
	}
	if(message.content === "*Hello darkness my old friends*") {
		message.channel.send("TG Huro")
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande *Hello darkness my old friends*`)
	}
	if(message.content === "_Hello darkness my old friend_") {
		message.channel.send("TG Huro")
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande _Hello darkness my old friend_`)
	}
	if(message.content === "_Hello darkness my old friends_") {
		message.channel.send("TG Huro")
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande _Hello darkness my old friends_`)
	}
	if(message.content === "TG Huro") {
		message.delete(300)
	}
	if(message.content === "Nagui") {
		message.channel.send("NAGUI COUCOU")
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande Nagui`)
	}
	if(message.content === "nagui") {
		message.channel.send("NAGUI COUCOU")
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande nagui`)
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
	if(message.content === "bouton rouge") {
		message.channel.send("Oh ! Vous avez vu ? Il est magnifiquement rougeâtre, n'appuyez pas dessus !")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande bouton rouge`)
	}
	if(message.content === "Bouton rouge") {
		message.channel.send("Oh ! Vous avez vu ? Il est magnifiquement rougeâtre, n'appuyez pas dessus !")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande Bouton rouge`)
	}
	if(message.content === "Appuie sur le bouton rouge") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande Appuie sur le bouton rouge`)
	}
	if(message.content === "*Appuie sur le bouton rouge*") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande *Appuie sur le bouton rouge*`)
	}
	if(message.content === "_Appuie sur le bouton rouge_") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande _Appuie sur le bouton rouge_`)
	}
	if(message.content === "appuie sur le bouton rouge") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande appuie sur le bouton rouge`)
	}
	if(message.content === "*appuie sur le bouton rouge*") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande *appuie sur le bouton rouge*`)
	}
	if(message.content === "_appuie sur le bouton rouge_") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande _appuie sur le bouton rouge_`)
	}
	if(message.content === "Appuyer sur le bouton rouge") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande Appuyer sur le bouton rouge`)
	}
	if(message.content === "*Appuyer sur le bouton rouge*") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande *Appuyer sur le bouton rouge*`)
	}
	if(message.content === "_Appuyer sur le bouton rouge_") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande _Appuyer sur le bouton rouge_`)
	}
	if(message.content === "appuyer sur le bouton rouge") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande appuyer sur le bouton rouge`)
	}
	if(message.content === "*appuyer sur le bouton rouge*") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande *appuyer sur le bouton rouge*`)
	}
	if(message.content === "_appuyer sur le bouton rouge_") {
		message.channel.send("Mais, pourquoi avez-vous été faire une chose pareille ? Vous n’avez donc pas vu le panneau : **« NE PAS APPUYER SUR CE BOUTON ! »** ? Comment allons-nous finir les essais avec le mécanisme d’autodestruction activé ?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande _appuyer sur le bouton rouge_`)
	}
	if(message.content.includes("<@272416422444007424>")) {
		message.react(':ThumbsUp:391304799599067146')
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande @Mimiron`)
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
		  var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !aki start`)
	}
	if(message.content === "``Rôle ajouté`` :white_check_mark:") {
		message.delete(5000)
	}
	if(message.content === "``Rôle retiré`` :white_check_mark:") {
		message.delete(5000)
	}
});

bot.login(process.env.TOKEN);