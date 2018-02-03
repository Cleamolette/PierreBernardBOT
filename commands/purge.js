module.exports.run = async (bot, message, args) => {
    async function purge() {
        message.delete();
        if(!message.member.roles.find("name", "Terrestre")) {
            message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande.`);
            return;
        }
        else if(!message.member.roles.find("name", "Modérateur")) {
            message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande.`);
            return;
        }
        if(isNaN(args[0])) {
            message.channel.send(`Syntaxe de la commande :\n \`!purge <nombre de messages à supprimer>\``);
            return;
        }
        const fetched = await message.channel.fetchMessages({limit: args[0]});
        console.log(fetched.size + ' messages supprimés ✅');
        bot.channels.get("389843676966158348").send(fetched.size + ' messages supprimés <:check:395246034575425537>')
        bot.channels.get("391601508158013440").send(fetched.size + ' messages supprimés <:check:395246034575425537>')
        message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Erreur : ${error}`));
    }
    purge();
}