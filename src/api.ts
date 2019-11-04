import * as Discord from "discord.js"

export interface IBotCommand{

    help(): string;
    isThisCommand(command: string): boolean;
    runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): void;
}