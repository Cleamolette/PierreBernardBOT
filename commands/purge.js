module.exports.run = async (bot, message, args) => {
    async function purge() {
        message.delete();
        if(!message.member.roles.find("name", "Le Conseil")) {
            message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande.`);
            return;
        }
        if(isNaN(args[0])) {
            message.channel.send(`Syntaxe de la commande :\n \`!purge <nombre de messages à supprimer>\``);
            return;
        }
        const fetched = await message.channel.fetchMessages({limit: args[0]});
        console.log(fetched.size + ' messages trouvés, suppression en cours...');
        message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Erreur : ${error}`));
    }
    purge();
}