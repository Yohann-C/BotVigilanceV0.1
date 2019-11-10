import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class serverinfo implements IBotCommand {

    private readonly _command = "serverinfo";

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
        let embed = new Discord.RichEmbed()
            .setColor([170, 0, 255])
            .setTitle("Informations du serveur")
            .setDescription("Bievenue sur le serveur, les droits de l'Homme sont pas toujours au top, mais stan clc")
            .addField("Nombre de membre :", `Le serveur a ${messageObject.guild.memberCount} membres`)
            .setImage('https://66.media.tumblr.com/3201aa9afc52d26c1277ef57451e8ec7/tumblr_pz5ylzmXSK1viv1xyo1_400.gif')
            .setFooter("Stan clc !");

        messageObject.channel.send(embed)
            .catch(console.error);
    }
}