import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class ban implements IBotCommand{

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
    runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): void {
        
        let mentionedUser = messageObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let banLog = `${messageObject.author.username}: ${suppliedReason}`;

        messageObject.delete(10);

        if(!messageObject.member.hasPermission("ADMINISTRATOR"))
        {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais tu n'as pas la permission cheh !`)
            return;
        }

        if(!mentionedUser)
        {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais le membre n'existe pas`)
            return;
        }
        messageObject.guild.member(mentionedUser).ban(banLog)
        messageObject.channel.send(`Le membre ${mentionedUser} à été ban avec succés casse toi sale chien`)
        .then(console.log)
        .catch(console.error)
    }
}