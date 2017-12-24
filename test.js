const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('message', message => {
    	if(message.content === "Kappa123") {
    		message.channel.send(':this:390917955942219796'),
    		console.log("Kappa123123123");
        }
});