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
const ConfigFile = require("./config");
const client = new Discord.Client();
let commands = [];
loadCommands(`${__dirname}/commands`);
client.on('ready', () => {
    console.log("Je suis connecté !");
    client.user.setActivity("Chasse des trésors").catch(console.error);
});
client.on("message", (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.channel.type == "dm" && message.author.id !== "202836483596353536") {
        return;
    }
    if (message.content.toLowerCase() === "ping" && message.author.id !== "202836483596353536") {
        return message.channel.send('Pong sale chien ');
    }
    if (message.content.toLowerCase() === "non" && message.author.id !== "202836483596353536") {
        return message.channel.send('bril');
    }
    if (!message.content.startsWith(ConfigFile.config.prefix)) {
        return;
    }

    if (message.author.id === "272103724263014401") {
        var random = Math.floor(Math.random() * 5);
        switch (random) {
            case 0:
                message.reply('bien joué ça damien');
                break;
            case 1:
                message.reply("c'est bien ça damien");
                break;
            case 2:
                message.reply("continue comme ça damien");
                break;
            case 3:
                message.reply("t'es un boss damien");
                break;
            case 4:
                message.reply("APEX quand damien?");
                break;
        }
    }
    handleCommand(message);
   
});
function handleCommand(message) {
    return __awaiter(this, void 0, void 0, function* () {
        let command = message.content.split(" ")[0].replace(ConfigFile.config.prefix, "").toLocaleLowerCase();
        let args = message.content.split(" ").slice(1);
        for (const commandsClass of commands) {
            try {
                if (!commandsClass.isThisCommand(command)) {
                    continue;
                }
                yield commandsClass.runCommand(args, message, client);
            }
            catch (exception) {
                console.log(exception);
            }
        }
    });
}
function loadCommands(commandsPath) {
    if (!ConfigFile.config || ConfigFile.config.commands.length === 0) {
        return;
    }
    for (const commandName of ConfigFile.config.commands) {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandsClass();
        commands.push(command);
    }
}
client.login(ConfigFile.config.token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBcUM7QUFFckMsdUNBQXNDO0FBR3RDLE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVwRCxJQUFJLFFBQVEsR0FBa0IsRUFBRSxDQUFDO0FBRWpDLFlBQVksQ0FBQyxHQUFHLFNBQVMsV0FBVyxDQUFDLENBQUE7QUFHckMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtJQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7QUFHcEUsQ0FBQyxDQUFDLENBQUE7QUFLRixNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO0lBRy9CLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFBRSxPQUFPO0tBQUU7SUFHbkMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7UUFBRSxPQUFPO0tBQUU7SUFHN0MsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtRQUM5QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7S0FDaEQ7SUFHRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO1FBQzdCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7S0FDekM7SUFHRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1B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