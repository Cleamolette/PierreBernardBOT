const express = require('express'); //Port app Heroku
const path = require('path'); //Port app Heroku
const PORT = process.env.PORT || 5000 //Heroku app port
const aws = require('aws-sdk'); //Heroku Token
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const config = require("./config.json");
//const sql = require("sqlite");
//const prefix = config.prefix;
//sql.open("./score.sqlite");

express() //Heroku app port
  .use(express.static(__dirname + '/public'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function(req, res) {
	  res.render('index');
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
let s3 = new aws.S3({ //Heroku Token
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
	bot.user.setActivity("!info");
	//bot.user.setUsername('Mimiron')
	//bot.user.setAvatar("./Mimiron.jpg")
	console.log("MimironBOT : Ready to go 👍");
});

bot.on('message', message => {
//	if(message.content.includes("^^")) {
//		message.react(':this:390917955942219796')
//		message.react(':this2:390917955984293889')
//		console.log("Someone made a SMILEY FACE.")
//	}
//	if(message.content.includes("😄")) {
//		message.react('😡')
//		console.log("Someone smiled.")
//	}
//	if(message.content.includes("😛")) {
//		message.react('😡')
//		console.log("Someone stuck out the tongue.")
//	}
	if(message.content.includes("😡")) {
		message.channel.send("I AM AN ANGRY MAN ! https://yenaman.s-ul.eu/J3RY8Io5")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command Angry Man`)
		console.log("Someone is an ANGRY MAN")
	}
	if(message.content === "I AM AN ANGRY MAN ! https://yenaman.s-ul.eu/J3RY8Io5") {
		message.delete(1000);
	}
	if(message.content === "*Hello darkness my old friend*") {
		message.channel.send("STFU Huro")
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command *Hello darkness my old friend*`)
		console.log(`>> Command "Hello darkness my old friend"`)
	}
	if(message.content === "*Hello darkness my old friends*") {
		message.channel.send("STFU Huro")
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command *Hello darkness my old friends*`)
		console.log(`>> Command "Hello darkness my old friends"`)
	}
	if(message.content === "_Hello darkness my old friend_") {
		message.channel.send("STFU Huro")
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command _Hello darkness my old friend_`)
		console.log(`>> Command "Hello darkness my old friend"`)
	}
	if(message.content === "_Hello darkness my old friends_") {
		message.channel.send("STFU Huro")
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command _Hello darkness my old friends_`)
		console.log(`>> Command "Hello darkness my old friends"`)
	}
	if(message.content === "STFU Huro") {
		message.delete(300)
	}
	if(message.content === "Nagui") {
		message.channel.send("HELLO NAGUI")
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command Nagui`)
		console.log(`>> Command Nagui`)
	}
	if(message.content === "nagui") {
		message.channel.send("HELLO NAGUI")
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command nagui`)
		console.log(`>> Command nagui`)
	}
	if(message.content === "HELLO NAGUI") {
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
	if(message.content === "red button") {
		message.channel.send("Oh! Have you seen? It's gorgeously reddish, don't press it!")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command bouton rouge`)
		console.log(`>> Command "bouton rouge"`)
	}
	if(message.content === "Bouton rouge") {
		message.channel.send("Oh! Have you seen? It's gorgeously reddish, don't press it!")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command Bouton rouge`)
		console.log(`>> Command "Bouton rouge"`)
	}
	if(message.content === "Press the red button") {
		message.channel.send("Now why would you go and do something like that? Didn't you see the sign that said **« DO NOT PUSH THIS BUTTON ! »** ? How will we finish testing with the self-destruct mechanism active?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command Press the red button`)
		console.log(`>> Command "Press the red button"`)
	}
	if(message.content === "*Press the red button*") {
		message.channel.send("Now why would you go and do something like that? Didn't you see the sign that said **« DO NOT PUSH THIS BUTTON ! »** ? How will we finish testing with the self-destruct mechanism active?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command *Press the red button*`)
		console.log(`>> Command "Press the red button"`)
	}
	if(message.content === "_Press the red button_") {
		message.channel.send("Now why would you go and do something like that? Didn't you see the sign that said **« DO NOT PUSH THIS BUTTON ! »** ? How will we finish testing with the self-destruct mechanism active?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command _Press the red button_`)
		console.log(`>> Command "Press the red button"`)
	}
	if(message.content === "press the red button") {
		message.channel.send("Now why would you go and do something like that? Didn't you see the sign that said **« DO NOT PUSH THIS BUTTON ! »** ? How will we finish testing with the self-destruct mechanism active?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command press the red button`)
		console.log(`>> Command "press the red button"`)
	}
	if(message.content === "*press the red button*") {
		message.channel.send("Now why would you go and do something like that? Didn't you see the sign that said **« DO NOT PUSH THIS BUTTON ! »** ? How will we finish testing with the self-destruct mechanism active?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command *press the red button*`)
		console.log(`>> Command "press the red button"`)
	}
	if(message.content === "_press the red button_") {
		message.channel.send("Now why would you go and do something like that? Didn't you see the sign that said **« DO NOT PUSH THIS BUTTON ! »** ? How will we finish testing with the self-destruct mechanism active?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command _press the red button_`)
		console.log(`>> Command "press the red button"`)
	}
	if(message.content === "Pressing the red button") {
		message.channel.send("Now why would you go and do something like that? Didn't you see the sign that said **« DO NOT PUSH THIS BUTTON ! »** ? How will we finish testing with the self-destruct mechanism active?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command Pressing the red button`)
		console.log(`>> Command "Pressing the red button"`)
	}
	if(message.content === "*Pressing the red button*") {
		message.channel.send("Now why would you go and do something like that? Didn't you see the sign that said **« DO NOT PUSH THIS BUTTON ! »** ? How will we finish testing with the self-destruct mechanism active?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command *Pressing the red button*`)
		console.log(`>> Command "Pressing the red button"`)
	}
	if(message.content === "_Pressing the red button_") {
		message.channel.send("Now why would you go and do something like that? Didn't you see the sign that said **« DO NOT PUSH THIS BUTTON ! »** ? How will we finish testing with the self-destruct mechanism active?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command _Pressing the red button_`)
		console.log(`>> Command "Pressing the red button"`)
	}
	if(message.content === "pressing the red button") {
		message.channel.send("Now why would you go and do something like that? Didn't you see the sign that said **« DO NOT PUSH THIS BUTTON ! »** ? How will we finish testing with the self-destruct mechanism active?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command pressing the red button`)
		console.log(`>> Command "pressing the red button"`)
	}
	if(message.content === "*pressing the red button*") {
		message.channel.send("Now why would you go and do something like that? Didn't you see the sign that said **« DO NOT PUSH THIS BUTTON ! »** ? How will we finish testing with the self-destruct mechanism active?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command *pressing the red button*`)
        console.log(`>> Command "pressing the red button"`)
	}
	if(message.content === "_pressing the red button_") {
		message.channel.send("Now why would you go and do something like that? Didn't you see the sign that said **« DO NOT PUSH THIS BUTTON ! »** ? How will we finish testing with the self-destruct mechanism active?")
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command _pressing the red button_`)
        console.log(`>> Command "pressing the red button"`)
	}
	if(message.content.includes("<@272416422444007424>")) {
		message.react(':ThumbsUp:391304799599067146')
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command @Mimiron`)
        console.log(`>> Command @Mimiron`)
	}
	if(message.content === "``Role added`` :white_check_mark:") {
		message.delete(5000)
	}
	if(message.content === "``Role removed`` :white_check_mark:") {
		message.delete(5000)
	}
	if(message.content.includes("A bot restart has been triggered.")) {
		process.exit(0);
	}
//	if (message.author.bot) return;
//	if (message.channel.type !== "text") return;
//
//	sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {	
//		if (!row) {
//			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
//		} else {
//			let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
//			if (curLevel > row.level) {
//				row.level = curLevel;
//				sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
//				message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
//			}
//			sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
//		}
//	}).catch(() => {
//		console.error;
//		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
//			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
//		});
//	});
//	if (!message.content.startsWith(prefix)) return;
//	if (message.content.startsWith(prefix + "level")) {
//		sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
//			if (!row) return message.reply("Your current level is 0");
//			message.reply(`Your current level is ${row.level}`);
//		});
//	} else
//
//	if (message.content.startsWith("!points")) {
//		sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
//			if (!row) return message.reply("sadly you do not have any points yet!");
//			message.reply(`you currently have ${row.points} points, good going!`);
//		});
//	}
});

bot.login(process.env.TOKEN);