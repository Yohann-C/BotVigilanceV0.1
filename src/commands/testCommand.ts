import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class testcommand implements IBotCommand {

    private readonly _command = "testcommand";

    help(): string {
        //le help de la commande
        return "Ça fait rien c un test"
    }

    isThisCommand(command: string): boolean {
        //verfie si on a fait la commande
        return command === this._command;
    }

    async runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): Promise<void> {
        //si ça marche
        messageObject.channel.send("ça marche bien");
    }
}