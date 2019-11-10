import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class ban implements IBotCommand {

    private readonly _command = "ban";

    help(): string {
        //le help de la commande
        return "ban le membre mentionné"
    }

    isThisCommand(command: string): boolean {
        //verfie si on a fait la commande
        return command === this._command;
    }

    //CE QUE LA FONCTION / COMMANDE FAIT
    async runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): Promise<void> {

        let mentionedUser = messageObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let banLog = `${messageObject.author.username}: ${suppliedReason}`;

        messageObject.delete(0)
            .catch(console.error);

        if (!messageObject.member.hasPermission("ADMINISTRATOR")) {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais tu n'as pas la permission cheh !`)
                .then(message => {
                    (message as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        if (!mentionedUser) {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais le membre n'existe pas`)
                .then(message => {
                    (message as Discord.Message).delete(5000);
                });
            return;
        }
        messageObject.guild.member(mentionedUser).ban(banLog)
        messageObject.channel.send(`Le membre ${mentionedUser} à été ban avec succés casse toi sale chien`)
            .then(console.log)
            .catch(console.error)
    }
}