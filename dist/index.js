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
    if (!message.content.startsWith(ConfigFile.config.prefix)) {
        return;
    }
    if (message.author.bot) {
        return;
    }
    if (message.guild === null && message.author.id !== "202836483596353536") {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBcUM7QUFFckMsdUNBQXNDO0FBR3RDLE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVwRCxJQUFJLFFBQVEsR0FBa0IsRUFBRSxDQUFDO0FBRWpDLFlBQVksQ0FBQyxHQUFHLFNBQVMsV0FBVyxDQUFDLENBQUE7QUFHckMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtJQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7QUFHcEUsQ0FBQyxDQUFDLENBQUE7QUFLRixNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO0lBSS9CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTztLQUFFO0lBR3RFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDdEIsT0FBTztLQUNSO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxvQkFBb0IsRUFBRTtRQUN0RSxPQUFPO0tBQ1Y7SUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLG9CQUFvQixFQUFFO1FBQ3hGLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENB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