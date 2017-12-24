const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('message', message => {
	if(message.content === "!test") {
		message.channel.send("Kappa123")
		console.log("Kappa123123123123123")
    }
});