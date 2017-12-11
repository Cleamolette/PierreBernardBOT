const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
	console.log("TyelasBOT : Opérationnel ^^");
});

bot.on('ready', () => {
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
});

const PORT = process.env.PORT || 5000
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

bot.login("MjcyNDE2NDIyNDQ0MDA3NDI0.DRCC1g.xj4ppg3xGWjMGo4yjpCb7Ievp40");