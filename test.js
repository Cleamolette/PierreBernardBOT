const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('message', message => {
    	if(message.content === "!test") {
    		message.channel.send('dédédudu')
    		console.log("Kappa123123123")
        }
});