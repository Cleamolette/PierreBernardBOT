module.exports.run = async (bot, message, args) => {
    async function purge() {
        message.delete();
        if(!message.member.roles.some(r=>["Terrestre", "Coordinateur", "Modérateur"].includes(r.name)) ) {
            message.channel.send(`You don't have the permission to run this command`);
            return;
        }
        if(isNaN(args[0])) {
            message.channel.send(`Command syntax :\n \`!purge <number of messages to delete>\``);
            return;
        }
        const fetched = await message.channel.fetchMessages({limit: args[0]});
        console.log(fetched.size + ' messages deleted✅');
        bot.channels.get("389843676966158348").send(fetched.size + ' messages deleted<:check:395246034575425537>')
        bot.channels.get("391601508158013440").send(fetched.size + ' messages deleted<:check:395246034575425537>')
        message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Error: ${error}`));
    }
    purge();
}