import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class testCommand implements IBotCommand{

    private readonly _command = "testCommand";

    help(): string {
        //le help de la commande
        return "Ça fait rien c un test"
    }

    isThisCommand(command: string): boolean {
        //verfie si on a fait la commande
        return command === this._command;
    }

    runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): void {
        //si ça marche
        messageObject.channel.send("ça marche bien chacal");
    }
}