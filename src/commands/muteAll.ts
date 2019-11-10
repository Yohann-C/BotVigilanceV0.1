import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class muteall implements IBotCommand {

    private readonly _command = "muteall";

    help(): string {
        //le help de la commande
        return "mute tous les membres d'un canal vocal"
    }

    isThisCommand(command: string): boolean {
        //verfie si on a fait la commande
        return command === this._command;
    }

    //CE QUE LA FONCTION / COMMANDE FAIT
    async runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): Promise<void> {

        let mentionedChanel = messageObject.member.voiceChannel;
        let suppliedReason = args.slice(1).join(" ") || "";

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

        if (!mentionedChanel) {
            messageObject.channel.send(`Désolé ${messageObject.author.username}, mais le membre n'existe pas`)
                .then(message => {
                    (message as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        for (let member of mentionedChanel.members) { member[1].setMute(true); }
        messageObject.member.setMute(false)
        messageObject.channel.send(`Les membres du channel ${mentionedChanel} ont été mute, fermez la tous !`)
            .then(console.log)
            .catch(console.error)
    }
}