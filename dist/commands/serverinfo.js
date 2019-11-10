"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class serverinfo {
    constructor() {
        this._command = "serverinfo";
    }
    help() {
        return "Ça fait rien c un test";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, messageObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let embed = new Discord.RichEmbed()
                .setColor([170, 0, 255])
                .setTitle("Informations du serveur")
                .setDescription("Bievenue sur le serveur, les droits de l'Homme sont pas toujours au top, mais stan clc")
                .addField("Nombre de membre :", `Le serveur a ${messageObject.guild.memberCount} membres`)
                .setImage('https://66.media.tumblr.com/3201aa9afc52d26c1277ef57451e8ec7/tumblr_pz5ylzmXSK1viv1xyo1_400.gif')
                .setFooter("Stan clc !");
            messageObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = serverinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zZXJ2ZXJpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLFVBQVU7SUFBL0I7UUFFcUIsYUFBUSxHQUFHLFlBQVksQ0FBQztJQXlCN0MsQ0FBQztJQXZCRyxJQUFJO1FBRUEsT0FBTyx3QkFBd0IsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFFekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxhQUE4QixFQUFFLE1BQXNCOztZQUVuRixJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQzlCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3ZCLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDbkMsY0FBYyxDQUFDLHdGQUF3RixDQUFDO2lCQUN4RyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxVQUFVLENBQUM7aUJBQ3pGLFFBQVEsQ0FBQyxpR0FBaUcsQ0FBQztpQkFDM0csU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRTdCLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDNUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQUE7Q0FDSjtBQTNCRCw2QkEyQkMifQ==