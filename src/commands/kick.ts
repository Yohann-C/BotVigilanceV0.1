import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class kick implements IBotCommand {

    private readonly _command = "kick";

    help(): string {
        //le help de la commande
        return "kick le membre mentionné"
    }

    isThisCommand(command: string): boolean {
        //verfie si on a fait la commande
        return command === this._command;
    }

    //CE QUE LA FONCTION / COMMANDE FAIT
    async runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): Promise<void> {

        //recupere le membre mentionné et la raison
        let mentionedUser = messageObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${messageObject.author.username}: ${suppliedReason}`;

        //supprime le message de l'auteur
        messageObject.delete(0)
            .catch(console.error);

        //etre sur que la personne est admin
        if (!messageObject.member.hasPermission("ADMINISTRATOR")) {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais tu n'as pas la permission cheh !`)
                .then(message => {
                    (message as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        //verifie que quelqu'un est mentionné
        if (!mentionedUser) {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais le membre n'existe pas`)
                .then(message => {
                    (message as Discord.Message).delete(5000)
                });
            return;
        }

        // Kick le membre et ajoute la raison dans les log
        messageObject.guild.member(mentionedUser).kick(kickLog)
        messageObject.channel.send(`Le membre ${mentionedUser} à été kick avec succés !`)
            .then(console.log)
            .catch(console.error)
    }
}
